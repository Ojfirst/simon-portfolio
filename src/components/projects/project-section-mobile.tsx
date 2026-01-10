"use client"

import { useState } from "react"
import { projects, Project } from "@/components/projects/project.data"
import { ExternalLink, Github, X } from "lucide-react"
import { useThemeTokens } from "@/lib/theme/useThemeTokens"
import Link from "next/link"

const ProjectsConsoleMobile = () => {
  const [selected, setSelected] = useState<Project | null>(null)
  const {
    textColor,
    subTextColor,
  } = useThemeTokens()

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-2 mt-16 space-y-12"
    >
      {/* Section Header */}
      <header className="text-center space-y-3">
        <h2 className={`text-4xl font-bold ${textColor}`}>
          Project Showcase
        </h2>
        <p className={`${subTextColor} max-w-2xl mx-auto`}>
          A curated view of automotive systems and modern web platforms I’ve built, each powered with production-grade code.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelected(project)}
            className="relative glass rounded-2xl p-6 text-left transition transform hover:scale-[1.03] hover:shadow-lg focus:outline-none cursor-pointer"
          >
            {/* Project Name */}
            <h3 className={`text-xl font-semibold ${subTextColor}`}>
              {project.name}
            </h3>

            {/* Category */}
            <p className={`text-sm ${subTextColor} mt-1`}>
              {project.category}
            </p>

            {/* Subtle holographic accent */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_60%)] rounded-2xl" />
          </button>
        ))}
      </div>

      {/* Project Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60">
          <div className="relative glass max-w-3xl w-full rounded-2xl p-8 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Project Details */}
            <h3 className={`text-2xl font-bold ${textColor} mb-4`}>
              {selected.name}
            </h3>
            <p className={` ${subTextColor}  mb-4`}>
              {selected.summary}
            </p>

            {/* Highlights */}
            <ul className="mb-4 space-y-2">
              {selected.highlights.map((item) => (
                <li
                  key={item}
                  className={`${subTextColor} text-sm before:content-['▸'] before:mr-2 before:text-neutral-500`}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selected.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-800 dark:text-neutral-200 dark:bg-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {selected.liveUrl && (
                <Link
                  href={selected.liveUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 dark:bg-neutral-800 border border-neutral-700 hover:bg-neutral-800 dark:hover:bg-neutral-700 transition text-white"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Link>
              )}
              {selected.githubUrl && (
                <Link
                  href={selected.githubUrl}
                  target="_blank"
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-700 bg-neutral-700 dark:hover:bg-neutral-800 transition dark:text-white dark:hover:text-neutral-100`}
                >
                  <Github size={18} />
                  Source Code
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsConsoleMobile;
