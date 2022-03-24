import { createCurrentUserHook, createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "v1",

  userCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const imgUrl = (source) =>  useNextSanityImage(
  config,
  source
);;
