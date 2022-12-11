import { sanityClient } from "../lib/sanity";
import { groq } from "next-sanity";

export const fetchStacks = async () => {
  const query = groq`
  *[_type == "stack"] {
    _id, skill, title, mainImage
} 


`;
  const stacks = await sanityClient.fetch(query, {
    next: { revalidate: 30 },
  });
  return stacks;
};
