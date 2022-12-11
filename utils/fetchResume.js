import { sanityClient } from "../lib/sanity";
import { groq } from "next-sanity";

export const fetchResume = async () => {
  const query = groq`
  *[_type == "resume"] {
     _id, description,year  
  
} | order(year asc)
`;
  const resume = await sanityClient.fetch(query, { next: { revalidate: 30 } });
  return resume;
};
