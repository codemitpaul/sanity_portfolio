import { sanityClient } from "../lib/sanity";
import { groq } from "next-sanity";

export const fetchProjects = async () => {
  const query = groq`
*[_type == "project"] {
  _id, title, url, mainImage, difficulty, stacks[] -> {
    _id, title, mainImage 
  } 
} | order(difficulty asc)
`;
  const projects = await sanityClient.fetch(query, {
    next: { revalidate: 60 },
  });
  return projects;
};
