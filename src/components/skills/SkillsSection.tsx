"use client"

import { getSkillsByCategory } from './getSkillsByCategory'
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { JsonLd } from '../seo/json-ld'
import { skillsSchema } from '@/lib/schema/skills-schema'

export function SkillsSection() {
  const groupedSkills = getSkillsByCategory()
  const { theme } = useTheme()

  // 🔁 Theme-aware tokens
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor = theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const mutedText = theme === "light" ? "text-neutral-600" : "text-neutral-500"
  const badgeBg = theme === "light" ? "bg-white/40" : "bg-white/5"
  const badgeBorder = theme === "light" ? "border-neutral-400/40" : "border-neutral-700"
  const badgeText = theme === "light" ? "text-neutral-800" : "text-neutral-300"

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-2 mt-16"
    >
      <JsonLd schema={skillsSchema()} />
      <header className="mb-14">
        <h2 className={`text-3xl font-semibold ${textColor}`}>Core Skills</h2>
        <p className={`mt-2 max-w-2xl ${subTextColor}`}>
          A consolidated view of technical, operational, and strategic skills
          applied across automotive platforms and modern software systems.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(groupedSkills).map(([category, skills], i) => (
          <motion.div
            key={category}
            className="glass rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  className={`
                    text-sm px-3 py-1 rounded-full
                    border ${badgeBorder}
                    ${badgeBg}
                    ${badgeText}
                  `}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.03 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
