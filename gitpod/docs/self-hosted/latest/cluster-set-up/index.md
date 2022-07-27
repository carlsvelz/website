---
section: self-hosted/latest
subsection: installation-guides
title: Cluster Set-Up
---

<script context="module">
  export const prerender = true;
</script>

# Cluster Set-Up

Gitpod is a Kubernetes application running with certain expectations on the characteristics of the cluster it is running on.

![cluster requirements](../../static/images/docs/self-hosted/cluster-requirements.png)

<!-- raw editable diagram can be found under static/images/docs/self-hosted/cluster-requirements.excalidraw -->

## Cluster Set-up Guides

> These guides are intended as a starting point for most users, but will not cover edge cases. In these situations, please see the requirements below to create your own cluster.

Our guides help you set up the infrastructure needed to run Gitpod Self-Hosted. These guides will also create cloud-provider specific versions of the [required components](./required-components) that you can then connect to your Gitpod installation during the installation process. They will also install [cert-manager](./required-components#cert-manager) for you.

There are guides for the most popular cloud providers and Kubernetes distributions:

- [Amazon Elastic Kubernetes Service (EKS)](./cluster-set-up/on-amazon-eks)
- [Google Kubernetes Engine (GKE)](./cluster-set-up/on-gke)
- [Microsoft Azure Kubernetes Service (AKS)](./cluster-set-up/on-microsoft-aks)
- [K3s](./cluster-set-up/on-k3s)

After completing the guides you will still need to configure [DNS](./requirements#dns) and have [certificates](./requirements#ssl) ready in order to proceed with the [installation](./getting-started).

## Cluster Requirements

### Supported Kubernetes Distributions

Gitpod requires Kubernetes as an orchestration technology in order to spin workspaces up and down--ideally in combination with cluster autoscaling to minimise cost. We strongly recommend deploying a dedicated Kubernetes cluster just for Gitpod Self-Hosted.

> Kubernetes version `1.21` or above is required

Gitpod Self-Hosted runs well on:

- Amazon Elastic Kubernetes Service
- Google Kubernetes Engine
- Microsoft Azure Kubernetes Service
- K3s

#### Incompatible Kubernetes Distributions

These platforms do not currently work with Gitpod Self-Hosted but we would like to support them in the future. Gitpod is an open-source project, maybe you could contribute the required changes to help get them working sooner?

- [Red Hat® OpenShift®](https://github.com/gitpod-io/gitpod/issues/5409)
- [Rancher Kubernetes Engine (RKE)](https://github.com/gitpod-io/gitpod/issues/5410)

If you are considering purchasing a commercial license for Gitpod Self-Hosted and need one of the above platforms then please [contact us](/contact/sales) to start discussions about making support for them happen sooner.

### Node Affinity Labels Requirements

Your Kubernetes cluster must have node(s) with the following labels applied to them:

- `gitpod.io/workload_meta=true`
- `gitpod.io/workload_ide=true`
- `gitpod.io/workload_workspace_services=true`
- `gitpod.io/workload_workspace_regular=true`
- `gitpod.io/workload_workspace_headless=true`

It is recommended to have a minimum of two node pools, grouping the `meta` and `ide` nodes into one node pool and `workspace` related nodes into another. These two groups of workloads have different performance characteristics. Separating them into node pools after the fact is more difficult and incurs downtime.

### Node and Container Requirements

These are the components expected on each node:

- Either Ubuntu 18.04 with ≥ v5.4 kernel or Ubuntu 20.04 with ≥ v5.4 kernel
- Calico for the networking overlay and network policy
- Containerd ≥ 1.5
- At least 4 vCPU and 16GB of RAM

### Kubernetes Privilege Requirements

Your Kubernetes cluster must allow Gitpod to run privileged pods and manage PodSecurityPolicies, as Gitpod depends on these privileges to provide workspace isolation.

### Load Balancer Requirements

Gitpod uses [`LoadBalancer` type services](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) to expose the Gitpod Dashboard, browser based IDEs, and SSH connections used by desktop IDEs. Your Kubernetes cluster must be able to provision layer 4 or layer 7 load balancers for `LoadBalancer` type services that can route HTTP(S) connections to Gitpod services. If you intend to use desktop IDEs or SSH to workspaces then your cluster must also be able to provision layer 4 load balancers that can route SSH connectiosn to Gitpod services.

All supported Kubernetes distributions provide load balancers that meet Gitpod's needs. For more information see the Kubernetes distribution documentation below:

- [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/docs/concepts/service-load-balancer)
- Amazon Elastic Kubernetes Engine:
  - Layer 4/7 (default): [Classic Load Balancer](https://aws.amazon.com/premiumsupport/knowledge-center/eks-kubernetes-services-cluster/)
  - Layer 4 only: [Network Load Balancing](https://docs.aws.amazon.com/eks/latest/userguide/network-load-balancing.html)
- [Microsoft Azure Kubernetes Service](https://docs.microsoft.com/en-us/azure/aks/concepts-network)
- [K3s](https://rancher.com/docs/k3s/latest/en/networking/#service-load-balancer)
