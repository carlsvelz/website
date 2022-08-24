---
section: self-hosted/latest
title: Google Kubernetes Engine (GKE)
---

<script context="module">
  export const prerender = true;
</script>

# How to Create a Cluster on Google Kubernetes Engine (GKE)

Instructions on how to create a Google GKE environment that is ready to install Gitpod are located in the [gitpod-io/gitpod-gke-guide](https://github.com/gitpod-io/gitpod-gke-guide) repository on GitHub. The installation process takes around twenty minutes. In the end, the following resources are created:

- A GKE cluster running Kubernetes v1.21 ([rapid channel](https://cloud.google.com/kubernetes-engine/docs/release-notes-rapid)).
- GCP L4 load balancer.
- Cloud SQL - MySQL database.
- Cloud DNS zone.
- In-cluster Docker registry using [Cloud Storage](https://cloud.google.com/storage) as storage backend.
- Installation of [calico](https://docs.projectcalico.org) as CNI and NetworkPolicy implementation
- Installation of [cert-manager](https://cert-manager.io/) for self-signed SSL certificates

> **Note:** GKE Dataplane V2 uses Cilium as container network interface (CNI) which is not supported by Gitpod. Please use GKE Dataplane V1.

Upon completion, this script will print the config for the resources created (including passwords) and what is the [next relevant step](./../getting-started#step-4-install-gitpod) in the installation process. Note that you will be able to skip steps 2 and 3 in the getting started guide because the script can do these steps for you.
