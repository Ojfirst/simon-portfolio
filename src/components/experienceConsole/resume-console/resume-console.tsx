"use client"

import { FileText, Download, ExternalLink } from "lucide-react"

export function ResumeConsole() {
  return (
    <section
      id="resume"
      className="max-w-7xl mx-auto px-6 py-2"
    >
      <header className="mb-12">
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
          Resume Access
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-400">
          Verified professional credentials detailing operational leadership,
          automotive expertise, and modern software systems engineering.
        </p>
      </header>

      <div className="glass rounded-2xl p-8 relative overflow-hidden">
        {/* holographic accent */}
        <div className="absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.10),transparent_60%)]
          dark:bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.05),transparent_60%)]
        " />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          {/* LEFT — SUMMARY */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-neutral-800 dark:text-neutral-300">
              <FileText size={20} />
              <span className="text-sm tracking-widest uppercase">
                Credential File
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Simon Abiodun Aina — Professional Resume
            </h3>

            <p className="max-w-xl text-sm text-neutral-700 dark:text-neutral-400">
              A comprehensive record of over two decades in automobile
              operations, dealership management, and the design of modern
              automotive software platforms.
            </p>

            <div className="text-xs text-neutral-600 dark:text-neutral-500">
              Format: PDF · Updated regularly · ATS-optimized
            </div>
          </div>

          {/* RIGHT — ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/resume/simon-abiodun-aina-resume.pdf"
              download
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-neutral-900 text-white
                dark:bg-white dark:text-neutral-900
                hover:opacity-90 transition
              "
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="/resume/simon-abiodun-aina-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                border border-neutral-400/50 dark:border-neutral-700
                text-neutral-800 dark:text-neutral-300
                hover:bg-black/5 dark:hover:bg-white/5 transition
              "
            >
              <ExternalLink size={18} />
              View Online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
