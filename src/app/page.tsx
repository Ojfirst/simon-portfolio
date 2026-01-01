import { OperationsHero } from '@/components/hero/hero'
import ProjectSwitcher from '@/components/projects/project-switcher'
import { ExperienceConsole } from '@/components/experienceConsole/experience-console';
import { CapabilityMatrix } from '@/components/experienceConsole/capability-matrix/capability-matrix';


export default function Home() {
  return (

    <main >
      <OperationsHero />
      <ProjectSwitcher />
      <ExperienceConsole />
      <CapabilityMatrix />
    </main>

  )
}
