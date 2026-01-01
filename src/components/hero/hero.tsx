"use client"

import Image from "next/image"
import heroImage from "../../../public/images/simon-profile.jpg"
import { Activity, Wrench, Code2, MapPin } from "lucide-react"
import { useTheme } from "next-themes"
import { JsonLd } from "@/components/seo/json-ld"
import { softwareApplicationSchema } from "@/lib/schema/software-application/schema"
import { motion } from "framer-motion"

const OperationsHero = () => {
  const { theme } = useTheme()

  return (
    <section className="relative min-h-[90vh] pt-32">
      <JsonLd schema={softwareApplicationSchema} />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT — IDENTITY CORE */}
        <motion.div
          className="glass rounded-2xl bg-white/5 backdrop-blur-xl p-6 space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className='text-sm bg-white/60 dark:bg-white/5 backdrop-blur-xl tracking-widest'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            SYSTEM IDENTITY
          </motion.div>

          <div className="grid grid-cols-[120px_1fr] gap-6 items-center">
            {/* Operator Image */}
            <motion.div
              className="relative rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 overflow-hidden"
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
              <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                Simon Abiodun Aina
              </h1>

              <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
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
            className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MapPin size={12} /> Operating Globally · Automotive Platforms
          </motion.div>
        </motion.div>

        {/* RIGHT — OPERATIONAL READOUT */}
        <motion.div
          className="glass rounded-2xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* subtle holographic layer */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(0,0,0,0.03),transparent_65%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.05),transparent_65%)] pointer-events-none"
            animate={{ x: [0, 5, 0], y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          <div className="relative space-y-6">
            <div className="text-xs tracking-widest text-neutral-500 dark:text-neutral-400">
              OPERATIONAL READOUT
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Readout label="Experience" value="25+ Years" />
              <Readout label="Domains" value="Automotive · SaaS" />
              <Readout label="Systems" value="Retail · Service · Ops" />
              <Readout label="Focus" value="Modern Dealership Software" />
            </div>

            <p className="pt-4 text-sm text-neutral-700 dark:text-neutral-300 max-w-md">
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
}: {
  label: string
  value: string
}) {
  return (
    <div className="space-y-1">
      <div className="text-xs text-neutral-500 dark:text-neutral-400 uppercase">{label}</div>
      <div className="text-lg font-medium text-neutral-900 dark:text-white">{value}</div>
    </div>
  )
}

export { OperationsHero }
