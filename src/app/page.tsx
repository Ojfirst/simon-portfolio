import { OperationsHero } from '@/components/hero/hero'
import ProjectSwitcher from '@/components/projects/project-switcher'


export default function Home() {
  return (
    <>
      <OperationsHero />
      <ProjectSwitcher />
      <main className="min-h-screen flex items-center justify-center">
        <div className="glass glass-hover rounded-2xl p-6">

          <h1 className="text-3xl text-green-500 font-bold">
            Tailwind is working 🎉
          </h1>
        </div>
      </main>
    </>
  )
}
