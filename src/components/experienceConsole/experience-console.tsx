"use client"

import { useState } from "react"
import { experiences, Experience } from "./experience.data"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { JsonLd } from "../seo/json-ld"
import { personSchema } from "@/lib/schema/person.schema"

export function ExperienceConsole() {
  const [active, setActive] = useState<Experience>(experiences[0])
  const { theme } = useTheme()

  // 🔁 Theme-aware tokens
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor =
    theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const mutedText =
    theme === "light" ? "text-neutral-600" : "text-neutral-500"

  const panelBg =
    theme === "light"
      ? "bg-white/60 border-neutral-300"
      : "bg-white/5 border-neutral-800"

  const activeItemBg =
    theme === "light" ? "bg-black/5" : "bg-white/10"

  const hoverItemBg =
    theme === "light" ? "hover:bg-black/5" : "hover:bg-white/5"

  const badgeBorder =
    theme === "light" ? "border-neutral-400/40" : "border-neutral-700"

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-2 mt-16">
      <JsonLd schema={personSchema} />
      <header className="mb-12">
        <h2 className={`text-3xl font-semibold ${textColor}`}>
          Operational History
        </h2>
        <p className={`mt-2 max-w-2xl ${subTextColor}`}>
          A system-level view of operational deployments across automotive
          business leadership and modern software engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
        {/* LEFT — DEPLOYMENT LOG */}
        <aside className={`glass rounded-2xl p-4 space-y-2 border ${panelBg}`}>
          {experiences.map((exp) => (
            <motion.button
              key={exp.id}
              onClick={() => setActive(exp)}
              layout
              whileHover={{ scale: 1.02 }}
              className={`w-full text-left px-4 py-4 rounded-xl transition
                ${active.id === exp.id
                  ? `${activeItemBg} ${textColor}`
                  : `${subTextColor} ${hoverItemBg} cursor-pointer`
                }
              `}
            >
              <div className="text-sm font-medium">{exp.role}</div>
              <div className="text-xs opacity-70">{exp.domain}</div>
            </motion.button>
          ))}
        </aside>

        {/* RIGHT — ACTIVE DEPLOYMENT */}
        <div className={`glass rounded-2xl p-8 relative overflow-hidden border ${panelBg}`}>
          {/* holographic radial layer */}
          <motion.div
            className={`absolute inset-0 pointer-events-none ${theme === "light"
              ? "bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.04),transparent_60%)]"
              : "bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_60%)]"
              }`}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 15 }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="relative space-y-6"
            >
              <div>
                <h3 className={`text-2xl font-semibold ${textColor}`}>
                  {active.role}
                </h3>
                <p className={`text-sm ${subTextColor}`}>
                  {active.organization} · {active.period}
                </p>
              </div>

              <p className={`max-w-2xl ${theme === "light" ? "text-neutral-800" : "text-neutral-300"}`}>
                {active.summary}
              </p>

              <div>
                <div className={`text-xs uppercase tracking-widest mb-2 ${mutedText}`}>
                  Operational Scope
                </div>
                <ul className="space-y-2">
                  {active.operations.map((op, i) => (
                    <motion.li
                      key={op}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`text-sm before:content-['▸'] before:mr-2 before:text-neutral-500 ${theme === "light"
                        ? "text-neutral-800"
                        : "text-neutral-300"
                        }`}
                    >
                      {op}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {active.systems.map((sys, i) => (
                  <motion.span
                    key={sys}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`text-xs px-3 py-1 rounded-full border ${badgeBorder} ${theme === "light"
                      ? "text-neutral-800 bg-white/40"
                      : "text-neutral-300 bg-white/5"
                      }`}
                  >
                    {sys}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
