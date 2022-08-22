---
section: self-hosted/latest
subsection: installation-guides
title: Self-Hosted Reference Architectures
---

<script context="module">
  export const prerender = true;
</script>

# Reference Architectures

Below you will find reference architectures supported and recommended by Gitpod for different situations and all major cloud providers. They help you create the infrastructure needed to run Gitpod Self-Hosted and come in the form of a guide and terraform configuration. All of these are used to validate any changes made to Gitpod on a nightly basis and fulfill the [requirements](../latest/cluster-set-up) Gitpod has on a cluster.

> You should see these reference architectures as a starting point for creating the infrastructure that is compliant with what you need. However, the further you deviate from them, the higher the potential for Gitpod to not behave as expected.

> **Note for azure users:** The azure versions of these are still being worked on. For the time being, please use the [AKS cluster set-up guide](https://github.com/gitpod-io/gitpod-microsoft-aks-guide) that will be replaced by these.

- [Proof-of-Value Reference Architecture](./reference-architecture/proof-of-value): Aimed at creating a minimal set of infrastructure for evaluation and testing purposes
- [Single-Cluster Reference Architecture for Production Purposes](./reference-architecture/single-cluster-ref-arch): Aimed at creating hardened infrastructure for continuous operation of Gitpod
- Multi-Cluster Production-Ready Reference Architecture (planned)
