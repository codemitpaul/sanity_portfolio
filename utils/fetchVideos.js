import { sanityClient } from "../lib/sanity";
import { groq } from "next-sanity";

export const fetchVideos = async () => {
  const query = groq`
    *[_type == "video"] {
           _id, title, description, url, mainImage, 
           stacks[] -> {
         _id, mainImage, skill, title   
      }
   
    } 
`;
  const videos = await sanityClient.fetch(query, { next: { revalidate: 30 } });
  return videos;
};
