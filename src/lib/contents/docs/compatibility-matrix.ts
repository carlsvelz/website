import type { Matrix } from "$lib/types/matrix.type";

export const compatibilityMatrix: Matrix[] = [
  {
    name: "Browser", // RESPONSIBLE TEAM: WEBAPP
    relevance: "users", // this is optional used for filtering based on relevance.
    components: [
      {
        name: "Google Chrome",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Safari",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Firefox",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
    ],
  },
  {
    name: "IDE", // RESPONSIBLE TEAM: IDE
    relevance: "users",
    components: [
      {
        name: "VS Code Web",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "VS Code Desktop",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "IntelliJ IDEA",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "GoLand",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "PyCharm",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "CLI access (e.g. vim)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
    ],
  },
  {
    name: "Source Control Management System (SCM)", // RESPONSIBLE TEAM: WEBAPP
    relevance: "everyone",
    components: [
      {
        name: "Github.com",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Github Enterprise Server",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "all officially supported versions",
          description: null,
        },
        supportedVersions:
          ' <a href="https://docs.github.com/en/enterprise-server@3.6/admin/all-releases#currently-supported-releases" target=”_blank">see currently supported versions</a>',
      },
      {
        name: "Gitlab.com",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Gitlab Self-Managed",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "all officially supported versions",
          description: null,
        },
        supportedVersions:
          ' <a href="https://docs.gitlab.com/ee/policy/maintenance.html" target=”_blank">see support policy</a>',
      },
      {
        name: "Bitbucket.org",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Bitbucket Server",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "> v7.20 (Jan 2022)",
          description: null,
        },
        supportedVersions: "> v7.20 (Jan 2022)",
      },
    ],
  },
  {
    name: "Operating System (Kernel)", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Linux Kernel",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "> 5.4",
          description: null,
        },
        supportedVersions: "5.4 < x < 5.15",
      },
    ],
  },
  {
    name: "Operating System (Distribution)", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Ubuntu",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "All LTS versions and the latest",
          description: null,
        },
        supportedVersions: "18.04, 20.04, 22.04",
      },
      {
        name: "Amazon Linux",
        availibility: "untested",
        limitations: null,
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
    ],
  },
  {
    name: "Orchestration System", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        limitations:
          "- Nodes with at least 4 vCPU and 16GB of RAM are expected <br/> - Your Kubernetes cluster must allow Gitpod to run privileged pods and manage PodSecurityPolicies, because Gitpod depends on these privileges to provide workspace isolation.",
        policy: {
          text: "the last three minor releases",
          description: null,
        },
        supportedVersions: "1.22, 1.23 and 1.24",
      },
    ],
  },
  {
    name: "Orchestration Platform", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Amazon Elastic Kubernetes Service (EKS)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "see Kubernetes support policy",
          description: null,
        },
        supportedVersions: "see Kubernetes support policy",
      },
      {
        name: "Google Kubernetes Engine (GKE)",
        availibility: "supported",
        limitations:
          '- <a href="https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2" target=”_blank">Dataplane V2</a> unsupported, <br/> - Not supported in combination with <a href="https://github.com/gitpod-io/gitpod/issues/11168">self-signed certs</a>',
        policy: {
          text: "see Kubernetes support policy",
          description: null,
        },
        supportedVersions: "see Kubernetes support policy",
      },
      {
        name: "Azure Kubernetes Service (AKS)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "see Kubernetes support policy",
          description: null,
        },
        supportedVersions: "see Kubernetes support policy",
      },
      {
        name: "K3s",
        availibility: "untested",
        limitations: null,
        policy: {
          text: "see Kubernetes support policy",
          description: null,
        },
        supportedVersions: "see Kubernetes support policy",
      },
    ],
  },
  {
    name: "Container Runtime", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "containerd",
        availibility: "supported",
        limitations: "Socket access required",
        policy: {
          text: "Last three minor releases",
          description: null,
        },
        supportedVersions: "1.4, 1.5 and 1.6.",
      },
    ],
  },
  {
    name: "Container Network Interface (CNI)", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Calico VXLAN",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
    ],
  },
  {
    name: "Certificate Management Tools", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Cert Manager",
        availibility: "supported",
        limitations:
          "Cert-Manager is required even if you don't use it for your own certificates because Gitpod uses it internally.",
        policy: {
          text: "Versions using cert-manager API V1",
          description:
            'More info: <a href="https://cert-manager.io/docs/reference/api-docs/#cert-manager.io%2fv1" target=”_blank”>cert-manager.io/v1</a>',
        },
        supportedVersions:
          '<a href="https://cert-manager.io/docs/release-notes/" target=”_blank">see cert-manager release notes</a>',
      },
    ],
  },
  {
    name: "Object Storage", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "AWS S3",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Google Cloud Storage (GCS)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Azure",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "MiniIO ",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
    ],
  },
  {
    name: "Image Registry", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "MiniIO backed by AWS S3",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
      {
        name: "Amazon Elastic Container Registry (ECR)",
        availibility: "not-supported",
        limitations:
          'Amazon Elastic Container Registry (ECR) does not implement the <a href="https://docs.docker.com/registry/spec/api/">Docker Registry HTTP API V2</a> spec fully. The spec expects that, if an image is pushed to a repository that doesn’t exist, it creates the repository before uploading the image. Amazon ECR does not do this - if the repository doesn’t exist, it will error on push. We advise to use MiniIO backed by S3 instead.',
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
      {
        name: "Google Container Registry (GCR)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Google Artifact Registry (GAR)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Azure Container Registry (ACR)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Artifactory",
        availibility: "untested",
        limitations: null,
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
      {
        name: "Other Docker Registry API compliant registries",
        availibility: "untested",
        limitations:
          'Any image registry that implements the <a href="https://docs.docker.com/registry/spec/api/">Docker Registry HTTP API V2</a> spec should work - however we cannot guarantee that it will. ',
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
    ],
  },
  {
    name: "Database", // RESPONSIBLE TEAM: WEBAPP
    relevance: "self-hosted admins",
    components: [
      {
        name: "MySQL",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "5.7",
          description: null,
        },
        supportedVersions: "5.7",
      },
    ],
  },
];

export const filterMatrixByRelevance = (relevance: string) =>
  relevance === "all"
    ? compatibilityMatrix
    : compatibilityMatrix.filter((matrix) =>
        matrix.relevance === "everyone" ? true : matrix.relevance === relevance
      );
