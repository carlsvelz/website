type Component = {
  name: string;
  availibility: "supported" | "not-supported" | "untested";
  policy: {
    text: string;
    description?: string;
  };
  supportedVersions: string;
};

export type Matrix = {
  name: string;
  relevance?: "admins" | "users";
  components: Component[];
};
