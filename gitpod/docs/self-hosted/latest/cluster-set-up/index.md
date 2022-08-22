---
section: self-hosted/latest
subsection: installation-guides
title: Cluster Set-Up
---

<script context="module">
  export const prerender = true;
</script>

# Cluster Requirements

Gitpod is a Kubernetes application running with certain expectations on the characteristics of the cluster it is running on.

![cluster requirements](../../static/images/docs/self-hosted/cluster-requirements.png)

<!-- raw editable diagram can be found under static/images/docs/self-hosted/cluster-requirements.excalidraw -->

## Reference Architectures

We have created a set of [reference architectures](../latest/reference-architecture) for all the major cloud providers that fulfill the requirements below. These are intended as a starting point for you to create an environment to install Gitpod into. If you wish to use K3s, please refer to the [k3s guide](../cluster-set-up/on-k3s).

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
