"use client"

import { useState } from "react"
import { projects, Project } from './project.data';
import { ExternalLink, Github } from "lucide-react"

export function ProjectsConsole() {
  const [active, setActive] = useState<Project>(projects[0])

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white">
          Project Console
        </h2>
        <p className="text-neutral-400 max-w-2xl">
          A live view of systems I’ve designed and built across automotive
          operations and modern web platforms.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* LEFT RAIL */}
        <aside className="rounded-2xl border border-neutral-800 bg-white/5 backdrop-blur-xl p-4 space-y-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActive(project)}
              className={`w-full text-left px-4 py-3 rounded-xl transition
                ${active.id === project.id
                  ? "bg-white/10 text-white border border-neutral-700"
                  : "text-neutral-400 hover:bg-white/5"
                }
              `}
            >
              <div className="text-sm font-medium">
                {project.name}
              </div>
              <div className="text-xs opacity-70">
                {project.category}
              </div>
            </button>
          ))}
        </aside>

        {/* RIGHT PANEL */}
        <div className="relative rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl p-8 overflow-hidden">
          {/* holographic accent */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

          <div className="relative space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              {active.name}
            </h3>

            <p className="text-neutral-400 max-w-xl">
              {active.summary}
            </p>

            <ul className="space-y-2">
              {active.highlights.map((item) => (
                <li
                  key={item}
                  className="text-sm text-neutral-300 before:content-['▸'] before:mr-2 before:text-neutral-500"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4">
              {active.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              {active.liveUrl && (
                <a
                  href={active.liveUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition text-white"
                >
                  <ExternalLink size={18} />
                  Live System
                </a>
              )}
              {active.githubUrl && (
                <a
                  href={active.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900 transition text-neutral-300"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
