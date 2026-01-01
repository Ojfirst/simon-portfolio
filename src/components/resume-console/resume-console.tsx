"use client"

import { useState } from "react"
import { resumeItems, ResumeItem } from "./resume.data"
import { Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ResumeConsole() {
  const [active, setActive] = useState<ResumeItem>(resumeItems[0])

  return (
    <section id="resume" className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-12">
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
          Resume Console
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-400">
          A structured view of my professional experience, education, and
          accomplishments. Download full PDFs for detailed information.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
        {/* LEFT — ITEM RAIL */}
        <aside className="glass rounded-2xl p-4 space-y-2">
          {resumeItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActive(item)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full text-left px-4 py-4 rounded-xl transition
                ${active.id === item.id
                  ? "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white"
                  : "text-neutral-700 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/5"
                }
              `}
            >
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-xs opacity-70">{item.organization}</div>
            </motion.button>
          ))}
        </aside>

        {/* RIGHT — ACTIVE ITEM DETAILS */}
        <div className="glass rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none
            bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]
            dark:bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_60%)]
          " />

          <div className="relative space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    {active.title}
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
                    Highlights
                  </div>
                  <ul className="space-y-2">
                    {active.highlights.map((hl) => (
                      <motion.li
                        key={hl}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="text-sm text-neutral-800 dark:text-neutral-300 before:content-['▸'] before:mr-2 before:text-neutral-500"
                      >
                        {hl}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {active.pdfUrl && (
                  <motion.a
                    href={active.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-xl border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-white transition"
                  >
                    <Download size={18} />
                    Download PDF
                  </motion.a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
