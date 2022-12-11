import type { NextApiRequest, NextApiResponse } from "next";
import { fetchProjects } from "../../utils/fetchProjects";

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects = await fetchProjects();
  res.status(200).json({ projects: projects });
}
