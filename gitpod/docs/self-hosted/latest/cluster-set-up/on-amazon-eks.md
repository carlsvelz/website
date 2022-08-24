---
section: self-hosted/latest
title: Amazon Elastic Kubernetes Service (EKS)
---

<script context="module">
  export const prerender = true;
</script>

# How to Create a Cluster on Amazon Elastic Kubernetes Service (EKS)

Instructions on how to create an Amazon EKS environment that is ready to install Gitpod are located in the [gitpod-io/gitpod-eks-guide](https://github.com/gitpod-io/gitpod-eks-guide) repository on GitHub. The installation process takes around twenty minutes. In the end, the following resources are created:

- An Amazon EKS cluster running Kubernetes v1.21
- Kubernetes nodes using a custom [AMI image](https://github.com/gitpod-io/amazon-eks-custom-amis/tree/gitpod):

  - Ubuntu 20.04
  - Linux kernel v5.12
  - containerd v1.54
  - runc: v1.0.1
  - CNI plugins: v0.9.1
  - Stargz Snapshotter: v0.7.0

- ALB load balancer with TLS termination and re-encryption
- RDS MySQL database
- Two autoscaling groups, one for gitpod components and another for workspaces
- In-cluster Docker registry using S3 as storage backend
- IAM account with S3 access (docker-registry and gitpod user content)
- Installation of [calico](https://docs.projectcalico.org) as CNI and NetworkPolicy implementation
- Installation of [cert-manager](https://cert-manager.io/) for self-signed SSL certificates
- Installation of [cluster-autoscaler](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler)
- Installation of [metrics-server](https://github.com/kubernetes-sigs/metrics-server)

Upon completion, this script will print the config for the resources created (including passwords) and what is the [next relevant step](./../getting-started#step-4-install-gitpod) in the installation process. Note that you will be able to skip steps 2 and 3 in the getting started guide because the script can do these steps for you.
