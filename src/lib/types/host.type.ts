import type { Image } from "./image.type";

export type Host = {
  avatar: Image;
  name: string;
  jobTitle: string;
  companyLogo: {
    component: any;
    props?: any;
  };
  text: string;
};
