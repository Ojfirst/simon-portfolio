import { OperationsHero } from '@/components/hero/hero'
import { ProjectsConsole } from '@/components/projects/projects-section'


export default function Home() {
  return (
    <>
      <OperationsHero />
      <ProjectsConsole />
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
