"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { projects, Project } from "@/components/projects/project.data"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { JsonLd } from "../seo/json-ld"
import { getProjectSchema } from "@/lib/schema/project-schema"

export function ProjectsConsole() {
  const [active, setActive] = useState<Project>(projects[0])
  const { theme } = useTheme()

  // Theme-aware colors (same pattern as ResumeConsole)
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor = theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const badgeBg = theme === "light" ? "bg-white/40" : "bg-white/5"
  const badgeBorder =
    theme === "light" ? "border-neutral-400/40" : "border-neutral-700"

  const panelBg =
    theme === "light"
      ? "bg-white/60 border-neutral-300"
      : "bg-neutral-950/70 border-neutral-800"

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-15">
      <JsonLd schema={getProjectSchema(active)} />

      <header className="mb-10">
        <h2 className={`text-3xl font-bold ${textColor}`}>
          Project Console
        </h2>
        <p className={`${subTextColor} max-w-2xl`}>
          A live view of systems I’ve designed and built across automotive operations and modern web platforms.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* LEFT RAIL */}
        <aside
          className={`rounded-2xl border backdrop-blur-xl p-4 space-y-2 ${panelBg}`}
        >
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`w-full text-left px-4 py-3 rounded-xl transition
                ${active.id === project.id
                  ? `${badgeBg} ${textColor} border ${badgeBorder}`
                  : `${subTextColor} hover:bg-white/10`
                }`}
            >
              <div className="text-sm font-medium">{project.name}</div>
              <div className="text-xs opacity-70">{project.category}</div>
            </motion.button>
          ))}
        </aside>

        {/* RIGHT PANEL */}
        <motion.div
          key={active.id}
          className={`relative rounded-2xl border backdrop-blur-xl p-8 overflow-hidden ${panelBg}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* holographic accent */}
          <motion.div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]"
            animate={{ x: [0, 5, 0], y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          <div className="relative space-y-6">
            <h3 className={`text-2xl font-semibold ${textColor}`}>
              {active.name}
            </h3>

            <motion.p
              key={active.summary}
              className={`${subTextColor} max-w-xl`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {active.summary}
            </motion.p>

            <ul className="space-y-2">
              {active.highlights.map((item) => (
                <motion.li
                  key={item}
                  className={`text-sm ${subTextColor} before:content-['▸'] before:mr-2 before:opacity-60`}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4">
              {active.stack.map((tech) => (
                <motion.span
                  key={tech}
                  className={`text-xs px-3 py-1 rounded-full border ${badgeBorder} ${badgeBg} ${textColor}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              {active.liveUrl && (
                <motion.a
                  href={active.liveUrl}
                  target="_blank"
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border bg-neutral-900 ${badgeBorder} text-white hover:bg-neutral-800`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink size={18} /> Live System
                </motion.a>
              )}
              {active.githubUrl && (
                <motion.a
                  href={active.githubUrl}
                  target="_blank"
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border ${badgeBorder} ${subTextColor}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github size={18} /> Source Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
