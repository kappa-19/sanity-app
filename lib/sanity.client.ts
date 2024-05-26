import { createClient } from "next-sanity";

export const projectId = "bino0dp2";
export const dataset = "production";
const apiVersion = "2024-03-11";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
