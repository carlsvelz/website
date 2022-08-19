import type { Matrix } from "$lib/types/matrix.type";

export const compatibilityMatrix: Matrix[] = [
  {
    name: "Orchestration System",
    relevance: "admins",
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        policy: {
          text: "the last minor three releases",
          description: null,
        },
        supportedVersions: "1.22, 1.23 and 1.24",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "not-supported",
        policy: {
          text: "default",
          description: null,
        },
        supportedVersions: "default",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "untested",
        policy: {
          text: "default",
          description: "",
        },
        supportedVersions: "default",
      },
    ],
  },
  {
    name: "Container Network Interface (CNI)",
    relevance: "users",
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        policy: {
          text: "the last minor three releases",
          description: null,
        },
        supportedVersions: "1.22, 1.23 and 1.24",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "not-supported",
        policy: {
          text: "default",
          description: null,
        },
        supportedVersions: "default",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "supported",
        policy: {
          text: "default",
          description: "",
        },
        supportedVersions: "default",
      },
    ],
  },
  {
    name: "Image Registry",
    relevance: "users",
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        policy: {
          text: "the last minor three releases",
          description: null,
        },
        supportedVersions: "1.22, 1.23 and 1.24",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "not-supported",
        policy: {
          text: "default",
          description: null,
        },
        supportedVersions: "default",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "supported",
        policy: {
          text: "default",
          description: "",
        },
        supportedVersions: "default",
      },
    ],
  },
  {
    name: "Orchestration System",
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        policy: {
          text: "the last minor three releases",
          description: null,
        },
        supportedVersions: "1.22, 1.23 and 1.24",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "not-supported",
        policy: {
          text: "default",
          description: null,
        },
        supportedVersions: "default",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "supported",
        policy: {
          text: "default",
          description: "",
        },
        supportedVersions: "default",
      },
    ],
  },
  {
    name: "Container Network Interface (CNI)",
    relevance: "admins",
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        policy: {
          text: "the last minor three releases",
          description: null,
        },
        supportedVersions: "1.22, 1.23 and 1.24",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "not-supported",
        policy: {
          text: "default",
          description: null,
        },
        supportedVersions: "default",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "supported",
        policy: {
          text: "default",
          description: "",
        },
        supportedVersions: "default",
      },
    ],
  },
  {
    name: "Image Registry",
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        policy: {
          text: "the last minor three releases",
          description: null,
        },
        supportedVersions: "1.22, 1.23 and 1.24",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "not-supported",
        policy: {
          text: "default",
          description: null,
        },
        supportedVersions: "default",
      },
      {
        name: "Elastic Kubernetes Service (EKS)",
        availibility: "supported",
        policy: {
          text: "default",
          description: "",
        },
        supportedVersions: "default",
      },
    ],
  },
];

export const filterMatrixByRelevance = (relevance: string) =>
  relevance === "all"
    ? compatibilityMatrix
    : compatibilityMatrix.filter((matrix) => matrix.relevance === relevance);
