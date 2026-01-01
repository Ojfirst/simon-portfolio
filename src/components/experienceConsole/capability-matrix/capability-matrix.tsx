"use client"

import { capabilityGroups } from "./capability.data"

export function CapabilityMatrix() {
  return (
    <section
      id="capabilities"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <header className="mb-14">
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
          Capability Matrix
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-400">
          A system-level view of operational and technical capabilities deployed
          across automotive business and modern software platforms.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {capabilityGroups.map((group) => (
          <div
            key={group.id}
            className="glass rounded-2xl p-6 relative overflow-hidden"
          >
            {/* holographic layer */}
            <div className="absolute inset-0 pointer-events-none
              bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.10),transparent_60%)]
              dark:bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_60%)]
            " />

            <div className="relative space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {group.title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="
                      rounded-xl px-4 py-3
                      border border-neutral-400/40 dark:border-neutral-700
                      bg-white/40 dark:bg-white/5
                      backdrop-blur-md
                      text-sm text-neutral-800 dark:text-neutral-300
                    "
                  >
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
