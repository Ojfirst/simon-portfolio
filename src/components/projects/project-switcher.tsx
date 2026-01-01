'use client';

import { useMobile } from "@/hooks/use-mobile";
import { ProjectsConsole } from "./projects-section";
import ProjectsConsoleMobile from "./project-section-mobile";



const ProjectSwitcher = () => {

  const isMobile = useMobile();

  return isMobile ? <ProjectsConsoleMobile /> : <ProjectsConsole />

}

export default ProjectSwitcher;