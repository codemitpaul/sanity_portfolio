import { sanityClient } from "../lib/sanity";
import { groq } from "next-sanity";

export const fetchGeneralCategories = async () => {
  const query = groq`
   *[_type == "generalCategory"] {
    _id, color, description, title,
      stacks[] -> {
         _id, mainImage, skill, title   
      }
    } 


`;
  const generalCategories = await sanityClient.fetch(query, {
    next: { revalidate: 30 },
  });
  return generalCategories;
};
