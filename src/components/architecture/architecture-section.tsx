"use client"

import { architecturePrinciples } from "./architecture.data"
import { Project } from "@/components/projects/project.data"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useTheme } from "next-themes"
import { JsonLd } from "@/components/seo/json-ld"
import { getArchitectureSchema } from "@/lib/schema/architecture-schema"
import { getProjectById } from "@/lib/projects/getProjectById"

export function ArchitectureSection() {
  const { theme } = useTheme()
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)

  // 🔁 Theme-aware tokens
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor = theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const mutedText = theme === "light" ? "text-neutral-600" : "text-neutral-500"
  const cardBg = theme === "light" ? "bg-white/40" : "bg-white/5"
  const cardBorder = theme === "light" ? "border-neutral-400/40" : "border-neutral-700"

  return (
    <section id="architecture" className="max-w-7xl mx-auto px-6 py-2 mt-16 relative">
      <JsonLd schema={getArchitectureSchema()} />

      <header className="mb-14">
        <h2 className={`text-3xl font-semibold ${textColor}`}>
          Architecture & Systems Thinking
        </h2>
        <p className={`mt-2 max-w-2xl ${subTextColor}`}>
          How I approach system design, workflow optimization, and operational automation
          to deliver scalable and maintainable solutions.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {architecturePrinciples.map((p, i) => {
          const relatedProject = getProjectById(p.relatedProject)

          return (
            <motion.div
              key={p.id}
              className={`glass rounded-2xl p-6 border ${cardBorder} ${cardBg} backdrop-blur-md cursor-pointer relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => relatedProject && setHoveredProject(relatedProject)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>{p.title}</h3>
              <p className={`${mutedText} text-sm`}>{p.description}</p>
              {p.articleUrl && (
                <a
                  href={p.articleUrl}
                  target="_blank"
                  className={`mt-3 inline-block text-sm font-medium underline ${textColor}`}
                >
                  Read Article
                </a>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Mini Project Preview Tooltip */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            key={hoveredProject.id}
            className="absolute top-0 right-0 max-w-sm p-4 bg-neutral-950/90 text-white rounded-2xl border border-neutral-700 shadow-xl z-50 pointer-events-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-lg">{hoveredProject.name}</h4>
            <p className="text-sm text-neutral-300 mt-1">{hoveredProject.summary}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {hoveredProject.stack.map(stack => (
                <span
                  key={stack}
                  className="text-xs px-2 py-1 rounded-full bg-white/10 border border-neutral-600"
                >
                  {stack}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-3">
              {hoveredProject.liveUrl && (
                <a
                  href={hoveredProject.liveUrl}
                  target="_blank"
                  className="text-xs underline"
                >
                  Live
                </a>
              )}
              {hoveredProject.githubUrl && (
                <a
                  href={hoveredProject.githubUrl}
                  target="_blank"
                  className="text-xs underline"
                >
                  Source
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
