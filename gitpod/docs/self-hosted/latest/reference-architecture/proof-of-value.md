---
section: self-hosted/latest
subsection: installation-guides
title: "Proof-of-Value Reference Architecture"
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import CloudPlatformToggle from "$lib/components/docs/cloud-platform-toggle.svelte";
  import Preparations from "./_chunks/preparations.md";
  import Networking from "./_chunks/networking.md";
</script>

# Proof-of-Value Reference Architecture

You like Gitpod and want to introduce it in your company? You want to evaluate the value of Gitpod Self-Hosted connected to your local Git provider with a couple of volunteers? This guide is for you! On this page, we describe a reference architecture for Gitpod that is optimized on a quick and simple setup. It is explicitly intended for the proof-of-value phase and not for productive usage. For the latter, please take a look at the other [reference architectures](../reference-architecture). After the proof-of-value phase, you should tear down your cluster and start again with the desired productive architecture.

## Overview

This reference architecture provides you with a setup where all components that are needed to operate Gitpod are deployed to the Kubernetes cluster. In contrast to a productive setup, this includes a database, an object storage, as well as a registry. For simplicity, we create only a single node where all workload will be deployed to.

## Cloud Provider Preparations

<Preparations />

## Kubernetes Cluster

The heart of this reference architecture is a **Kubernetes cluster** where all components are deployed to. This cluster has a single node pool that needs to have all of the following labels:

- `gitpod.io/workload_meta=true`
- `gitpod.io/workload_ide=true`
- `gitpod.io/workload_workspace_services=true`
- `gitpod.io/workload_workspace_regular=true`
- `gitpod.io/workload_workspace_headless=true`

The following table gives an overview of the node types for the different cloud providers that are used by this reference architecture.

|                  | GCP               | AWS           |
| ---------------- | ----------------- | ------------- |
| Gitpod Node Pool | `n2d-standard-16` | `m6i.2xlarge` |

<CloudPlatformToggle id="cloud-platform-toggle-cluster">

<div slot="gcp">

First, we [create a **service account**](https://cloud.google.com/iam/docs/creating-managing-service-accounts) for the cluster. The service account needs to have the following roles:

| Roles                         |
| ----------------------------- |
| roles/logging.logWriter       |
| roles/monitoring.metricWriter |
| roles/container.admin         |

Run the following commands to create the service account:

```bash
GKE_SA=gitpod-gke
GKE_SA_EMAIL="${GKE_SA}"@"${PROJECT_NAME}".iam.gserviceaccount.com
gcloud iam service-accounts create "${GKE_SA}" --display-name "${GKE_SA}"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/logging.logWriter"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/monitoring.metricWriter"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/container.admin"
```

After that, we [create a **Kubernetes cluster**](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster).

|                   |                                                                                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image Type        | `UBUNTU_CONTAINERD`                                                                                                                                                                                                    |
| Machine Type      | `n2d-standard-16`                                                                                                                                                                                                      |
| Cluster Version   | Choose latest from [regular channel](https://cloud.google.com/kubernetes-engine/docs/release-notes-regular)                                                                                                            |
| Enable            | Autoscaling,<br/>Autorepair,<br/>IP Alias,<br/>Network Policy                                                                                                                                                          |
| Disable           | Autoupgrade<br/>`metadata=disable-legacy-endpoints=true`                                                                                                                                                               |
| Create Subnetwork | `gitpod-${CLUSTER_NAME}`                                                                                                                                                                                               |
| Number of nodes   | 1                                                                                                                                                                                                                      |
| Min Nodes         | 1                                                                                                                                                                                                                      |
| Max Nodes         | 50                                                                                                                                                                                                                     |
| Max Pods per Node | 110                                                                                                                                                                                                                    |
| Addons            | HorizontalPodAutoscaling,<br/>NodeLocalDNS,<br/>NetworkPolicy                                                                                                                                                          |
| Scopes            | `gke-default`,<br/>`https://www.googleapis.com/auth/ndev.clouddns.readwrite`                                                                                                                                           |
| Region            | Choose your [region and zones](https://cloud.google.com/compute/docs/regions-zones)                                                                                                                                    |
| Node Labels       | `gitpod.io/workload_meta=true`,<br/>`gitpod.io/workload_ide=true`,<br/>`gitpod.io/workload_workspace_services=true`,<br/>`gitpod.io/workload_workspace_regular=true`,<br/>`gitpod.io/workload_workspace_headless=true` |

```bash
CLUSTER_NAME=gitpod
REGION=us-central1-b
GKE_VERSION=1.21.12

gcloud container clusters \
    create "${CLUSTER_NAME}" \
    --disk-type="pd-ssd" \
    --disk-size="100GB" \
    --image-type="UBUNTU_CONTAINERD" \
    --machine-type="n2d-standard-16" \
    --cluster-version="${GKE_VERSION}" \
    --zone="${ZONE}" \
    --service-account "${GKE_SA_EMAIL}" \
    --num-nodes=1 \
    --no-enable-basic-auth \
    --enable-autoscaling \
    --enable-autorepair \
    --no-enable-autoupgrade \
    --enable-ip-alias \
    --enable-network-policy \
    --create-subnetwork name="gitpod-${CLUSTER_NAME}" \
    --metadata=disable-legacy-endpoints=true \
    --scopes="gke-default,https://www.googleapis.com/auth/ndev.clouddns.readwrite" \
    --node-labels="gitpod.io/workload_meta=true,gitpod.io/workload_ide=true,gitpod.io/workload_workspace_services=true,gitpod.io/workload_workspace_regular=true,gitpod.io/workload_workspace_headless=true" \
    --min-nodes=1 \
    --max-nodes=50 \
    --addons=HorizontalPodAutoscaling,NodeLocalDNS,NetworkPolicy
```

Now, you can **connect `kubectl`** to your newly created cluster.

```bash
gcloud container clusters get-credentials --zone="${ZONE}" "${CLUSTER_NAME}"
```

After that, you need to create cluster role bindings to allow the current user to create new RBAC rules.

```bash
kubectl create clusterrolebinding cluster-admin-binding \
    --clusterrole=cluster-admin \
    --user="$(gcloud config get-value core/account)"
```

</div>

</CloudPlatformToggle>

## Ingress

<Networking />

## Install Gitpod

Congratulations. You have set up your cluster. Now, you are ready to install Gitpod. Follow the instructions of [step 4 of the Getting Started Guide](../getting-started#step-4-install-gitpod).

If you followed the steps to create your infrastructure of this guide, you need to use the following config settings for your Gitpod installation:

| General settings |                    |
| ---------------- | ------------------ |
| Domain name      | value of `$DOMAIN` |

Keep cert-manager selected for the TLS certificates options.

| TLS certificates            |                         |
| --------------------------- | ----------------------- |
| Self-signed TLS certificate | no                      |
| cert-manager                | yes                     |
| Issuer name                 | `gitpod-issuer`         |
| Issuer type                 | Select “cluster issuer” |
