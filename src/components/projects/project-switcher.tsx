import { useMobile } from "@/hooks/use-mobile";
import { ProjectsConsole } from "./projects-section";



const ProjectSwitcher = () => {

  const isMobile = useMobile();

  return isMobile ? '' : <ProjectsConsole />

}

export default ProjectSwitcher;