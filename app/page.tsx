import React from "react";
import HomeSection from "./HomeSection";
import VideoSection from "./VideoSection";
import { fetchVideos } from "../utils/fetchVideos";
import { fetchGeneralCategories } from "../utils/fetchGeneralCategories";
import { fetchResume } from "../utils/fetchResume";
import { fetchSocialIcons } from "../utils/fetchSocials";
import { fetchStacks } from "../utils/fetchStacks";
import { fetchProjects } from "../utils/fetchProjects";
import Technologies from "./Technologies";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

export const revalidate = 100;

const HomePage = async () => {
  const videos = await fetchVideos();
  const generalCategories = await fetchGeneralCategories();
  const resume = await fetchResume();
  const socialIcons = await fetchSocialIcons();
  const stacks = await fetchStacks();
  const projects = await fetchProjects();

  return (
    <div className="overflow-x-hidden">
      <HomeSection />
      <VideoSection videos={videos} stacks={stacks} />
      <Technologies generalCategories={generalCategories} />
      <AboutMe resume={resume} />
      <Projects projects={projects} />
      <Contact socialIcons={socialIcons} />
    </div>
  );
};

export default HomePage;
