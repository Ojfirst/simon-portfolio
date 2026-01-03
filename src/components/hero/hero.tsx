"use client"

import Image from "next/image"
import heroImage from "../../../public/images/simon-profile.jpg"
import { Activity, Wrench, Code2, MapPin } from "lucide-react"
import { useTheme } from "next-themes"
import { JsonLd } from "@/components/seo/json-ld"
import { softwareApplicationSchema } from "@/lib/schema/software-application/schema"
import { motion } from "framer-motion"
import { AvailabilityBadge } from "../availability/AvailabilityBadge"

const OperationsHero = () => {
  const { theme } = useTheme()

  // Theme-aware tokens (same system used elsewhere)
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor =
    theme === "light" ? "text-neutral-700" : "text-neutral-300"
  const mutedText =
    theme === "light" ? "text-neutral-500" : "text-neutral-400"

  const panelBg =
    theme === "light"
      ? "bg-white/60 border-neutral-300"
      : "bg-white/5 border-white/10"

  const imageBg =
    theme === "light"
      ? "bg-black/5 border-black/10"
      : "bg-white/5 border-white/10"

  return (
    <section className="relative min-h-[90vh] pt-32">
      <JsonLd schema={softwareApplicationSchema} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT — IDENTITY CORE */}
        <motion.div
          className={`glass rounded-2xl backdrop-blur-xl p-6 space-y-6 border ${panelBg}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={`text-sm tracking-widest px-2 py-1 rounded ${theme === "light" ? "text-gray-800" : "text-[#f4f4f4]"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            SYSTEM IDENTITY
          </motion.div>

          <div className="grid grid-cols-[120px_1fr] gap-6 items-center">
            {/* Operator Image */}
            <motion.div
              className={`relative rounded-xl border overflow-hidden ${imageBg}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src={heroImage}
                alt="Simon Abiodun Aina – Automotive Operations and Software Systems Architect"
                width={300}
                height={360}
                priority
                className="object-cover grayscale-[15%]"
              />
              <div className="absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 pointer-events-none" />
            </motion.div>

            {/* Identity Text */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className={`text-3xl font-semibold ${textColor}`}>
                Simon Abiodun Aina
              </h1>

              <div className={`space-y-2 text-sm ${subTextColor}`}>
                <motion.div className="flex items-center gap-2" whileHover={{ x: 2 }}>
                  <Wrench size={14} /> Automobile Operations Veteran
                </motion.div>
                <motion.div className="flex items-center gap-2" whileHover={{ x: 2 }}>
                  <Code2 size={14} /> Full-Stack Systems Developer
                </motion.div>
                <motion.div className="flex items-center gap-2" whileHover={{ x: 2 }}>
                  <Activity size={14} /> Automotive Retail Software Architect
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={`flex items-center gap-2 text-xs pt-2 ${mutedText}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MapPin size={12} /> Operating Globally · Automotive Platforms
          </motion.div>
          <AvailabilityBadge />
        </motion.div>

        {/* RIGHT — OPERATIONAL READOUT */}
        <motion.div
          className={`glass rounded-2xl p-8 relative overflow-hidden border ${panelBg}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* holographic layer */}
          <motion.div
            className={`absolute inset-0 pointer-events-none ${theme === "light"
              ? "bg-[radial-gradient(circle_at_60%_40%,rgba(0,0,0,0.03),transparent_65%)]"
              : "bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.05),transparent_65%)]"
              }`}
            animate={{ x: [0, 5, 0], y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          <div className="relative space-y-6">
            <div className={`text-xs tracking-widest ${mutedText}`}>
              OPERATIONAL READOUT
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Readout label="Experience" value="25+ Years" theme={theme} />
              <Readout label="Domains" value="Automotive · SaaS" theme={theme} />
              <Readout label="Systems" value="Retail · Service · Ops" theme={theme} />
              <Readout label="Focus" value="Modern Dealership Software" theme={theme} />
            </div>

            <p className={`pt-4 text-sm max-w-md ${subTextColor}`}>
              Designing and engineering production-grade automotive software
              that powers real businesses — from service scheduling to inventory,
              analytics, and operational automation.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function Readout({
  label,
  value,
  theme,
}: {
  label: string
  value: string
  theme?: string
}) {
  return (
    <div className="space-y-1">
      <div
        className={`text-xs uppercase ${theme === "light" ? "text-neutral-500" : "text-neutral-400"
          }`}
      >
        {label}
      </div>
      <div
        className={`text-lg font-medium ${theme === "light" ? "text-neutral-900" : "text-white"
          }`}
      >
        {value}
      </div>
    </div>
  )
}

export { OperationsHero }
