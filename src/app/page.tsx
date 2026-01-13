import { OperationsHero } from '@/components/hero/hero'
import { AboutSection } from '@/components/about-section/about-section';
import ProjectSwitcher from '@/components/projects/project-switcher'
import { ExperienceConsole } from '@/components/experienceConsole/experience-console';
import { CapabilityMatrix } from '@/components/experienceConsole/capability-matrix/capability-matrix';
import { ResumeConsole } from '@/components/resume-console/resume-console';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ArchitectureSection } from '@/components/architecture/architecture-section';
import { ContactSection } from '@/components/contact/contact-section';



export default function Home() {
  return (
    <>

      <OperationsHero />
      <AboutSection />
      <ProjectSwitcher />
      <ExperienceConsole />
      <CapabilityMatrix />
      <ResumeConsole />
      <SkillsSection />
      <ArchitectureSection />
      <ContactSection />
    </>
  )
}
