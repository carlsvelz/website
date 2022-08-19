import type { Matrix } from "$lib/types/matrix.type";

export const compatibilityMatrix: Matrix[] = [
  {
    name: "Orchestration System",
    relevance: "admins", // this is optional used for filtering based on relevance.
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        policy: {
          text: "the last minor three releases",
          description:
            'The description can go here which can contain links as well <a href="/docs">Docs</a>.', // description it the tooltip that appears once the question mark is hovered upon.
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
    name: "Container Network Interface (CNI)",
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
