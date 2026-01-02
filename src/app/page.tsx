import { OperationsHero } from '@/components/hero/hero'
import ProjectSwitcher from '@/components/projects/project-switcher'
import { ExperienceConsole } from '@/components/experienceConsole/experience-console';
import { CapabilityMatrix } from '@/components/experienceConsole/capability-matrix/capability-matrix';
import { ResumeConsole } from '@/components/resume-console/resume-console';
import { SkillsSection } from '@/components/skills/SkillsSection';


export default function Home() {
  return (

    <main >
      <OperationsHero />
      <ProjectSwitcher />
      <ExperienceConsole />
      <CapabilityMatrix />
      <ResumeConsole />
      <SkillsSection />
    </main>

  )
}
