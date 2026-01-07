"use client"

import { useState } from "react"
import { resumes, Resume } from "./resume.data"
import { AnimatePresence, motion } from "framer-motion"
import { Download } from "lucide-react"
import { useTheme } from "next-themes"
import { JsonLd } from "../seo/json-ld";
import { getResumeSchema } from '@/lib/schema/resume.schema'

export function ResumeConsole() {
  const [active, setActive] = useState<Resume>(resumes[0])
  const { theme } = useTheme()

  // Theme-aware colors
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor = theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const badgeBg = theme === "light" ? "bg-white/40" : "bg-white/5"
  const badgeBorder = theme === "light" ? "border-neutral-400/40" : "border-neutral-700"

  return (
    <section id="resume" className="max-w-7xl mx-auto px-6 py-2 mt-16">
      <JsonLd schema={getResumeSchema(active)} />
      <header className="mb-14">
        <h2 className={`text-3xl font-semibold ${textColor}`}>
          Resume Console
        </h2>
        <p className={`mt-2 max-w-2xl ${subTextColor}`}>
          A dynamic view of my career, skills, and education with downloadable PDFs.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
        {/* LEFT — RESUME NAV */}
        <aside className="glass rounded-2xl p-4 space-y-2">
          {resumes.map((resume) => (
            <button
              key={resume.id}
              onClick={() => setActive(resume)}
              className={`w-full text-left px-4 py-4 rounded-xl transition
                ${active.id === resume.id
                  ? `bg-black/5 dark:bg-white/10 ${textColor} border border-neutral-700`
                  : `${subTextColor} hover:bg-black/5 dark:hover:bg-white/5`
                }`}
            >
              <div className="text-sm font-medium">{resume.title}</div>
              <div className="text-xs opacity-70">{resume.subTitle}</div>
            </button>
          ))}
        </aside>

        {/* RIGHT — ACTIVE RESUME */}
        <div className="glass rounded-2xl p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div>
                <h3 className={`text-2xl font-semibold ${textColor}`}>
                  {active.title}
                </h3>
                <p className={`text-sm ${subTextColor}`}>
                  {active.organization} · {active.period}
                </p>
                <p className={`mt-2 ${subTextColor}`}>{active.summary}</p>
              </div>

              {/* Highlights */}
              <div className="mt-4">
                <div className={`text-xs uppercase tracking-widest ${subTextColor} mb-2`}>
                  Key Highlights
                </div>
                <ul className="space-y-2">
                  {active.highlights.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`text-sm before:content-['▸'] before:mr-2 before:text-neutral-500 ${textColor}`}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <div className={`text-xs uppercase tracking-widest ${subTextColor} mb-2`}>
                  Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`text-xs px-3 py-1 rounded-full border ${badgeBorder} ${badgeBg} ${textColor} cursor-default hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Download PDF */}
              <div className="mt-6">
                <a
                  href={active.pdfUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition text-white"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
