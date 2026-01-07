"use client"

import { capabilityGroups } from "./capability.data"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { JsonLd } from "@/components/seo/json-ld";
import { getCapabilitySchema } from "@/lib/schema/getCapabilitySchema";

export function CapabilityMatrix() {
  const { theme } = useTheme()
  const capabilitySchema = getCapabilitySchema()

  // 🔁 Theme tokens (same language as other consoles)
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor =
    theme === "light" ? "text-neutral-700" : "text-neutral-400"

  const panelBg =
    theme === "light"
      ? "bg-white/60 border-neutral-300"
      : "bg-white/5 border-neutral-800"

  const badgeBg =
    theme === "light" ? "bg-white/40 hover:bg-white/60" : "bg-white/5 hover:bg-white/10"

  const badgeBorder =
    theme === "light" ? "border-neutral-400/40" : "border-neutral-700"

  const badgeText =
    theme === "light" ? "text-neutral-800" : "text-neutral-300"

  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-6 py-2 mt-16">
      <JsonLd schema={capabilitySchema} />
      <header className="mb-14">
        <h2 className={`text-3xl font-semibold ${textColor}`}>
          Capability Matrix
        </h2>
        <p className={`mt-2 max-w-2xl ${subTextColor}`}>
          A system-level view of operational and technical capabilities deployed
          across automotive business and modern software platforms.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {capabilityGroups.map((group, i) => (
          <motion.div
            key={group.id}
            className={`glass rounded-2xl p-6 relative overflow-hidden border ${panelBg}
              hover:scale-[1.02] transition-transform duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* holographic layer */}
            <div
              className={`absolute inset-0 pointer-events-none ${theme === "light"
                ? "bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.04),transparent_60%)]"
                : "bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_60%)]"
                }`}
            />

            <div className="relative space-y-5">
              <div>
                <h3 className={`text-lg font-semibold ${textColor}`}>
                  {group.title}
                </h3>
                <p className={`text-sm ${subTextColor}`}>
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.capabilities.map((capability, j) => (
                  <motion.div
                    key={capability}
                    className={`
                      rounded-xl px-4 py-3
                      border ${badgeBorder}
                      ${badgeBg}
                      backdrop-blur-md
                      text-sm ${badgeText}
                      cursor-default
                      transition-colors duration-300
                    `}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.05, duration: 0.4 }}
                  >
                    {capability}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
