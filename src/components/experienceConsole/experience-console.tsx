"use client"

import { useState } from "react"
import { experiences, Experience } from "./experience.data"

export function ExperienceConsole() {
  const [active, setActive] = useState<Experience>(experiences[0])

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <header className="mb-12">
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
          Operational History
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-400">
          A system-level view of operational deployments across automotive
          business leadership and modern software engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
        {/* LEFT — DEPLOYMENT LOG */}
        <aside className="glass rounded-2xl p-4 space-y-2">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActive(exp)}
              className={`w-full text-left px-4 py-4 rounded-xl transition
                ${active.id === exp.id
                  ? "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white"
                  : "text-neutral-700 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/5"
                }
              `}
            >
              <div className="text-sm font-medium">
                {exp.role}
              </div>
              <div className="text-xs opacity-70">
                {exp.domain}
              </div>
            </button>
          ))}
        </aside>

        {/* RIGHT — ACTIVE DEPLOYMENT */}
        <div className="glass rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none
            bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]
            dark:bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_60%)]
          " />

          <div className="relative space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                {active.role}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                {active.organization} · {active.period}
              </p>
            </div>

            <p className="max-w-2xl text-neutral-800 dark:text-neutral-300">
              {active.summary}
            </p>

            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-500 mb-2">
                Operational Scope
              </div>
              <ul className="space-y-2">
                {active.operations.map((op) => (
                  <li
                    key={op}
                    className="text-sm text-neutral-800 dark:text-neutral-300 before:content-['▸'] before:mr-2 before:text-neutral-500"
                  >
                    {op}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {active.systems.map((sys) => (
                <span
                  key={sys}
                  className="text-xs px-3 py-1 rounded-full border
                    border-neutral-400/40 dark:border-neutral-700
                    text-neutral-800 dark:text-neutral-300"
                >
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
