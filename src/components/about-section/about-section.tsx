"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { JsonLd } from "@/components/seo/json-ld"
import { contactInfo } from "@/components/contact/contact.data"

export function AboutSection() {
  const { theme } = useTheme()

  // 🔁 Theme-aware tokens
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor = theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const mutedText = theme === "light" ? "text-neutral-600" : "text-neutral-500"

  // JSON-LD Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Simon Abiodun Aina",
    jobTitle: "Software Engineer & Automotive Systems Specialist",
    description:
      "Experienced professional bridging modern software engineering with automotive operations, delivering scalable solutions and operational excellence.",
    url: "https://yourdomain.com",
    sameAs: contactInfo.linkedProfiles,
    email: `mailto:${contactInfo.email}`,
    telephone: contactInfo.phone,
  }

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-2">
      <JsonLd schema={personSchema} />

      <header className="mb-12 text-center">
        <motion.h2
          className={`text-3xl font-semibold ${textColor}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className={`mt-3 max-w-2xl mx-auto ${subTextColor}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I combine over 20 years of leadership in automotive sales and operations with modern software engineering practices. My mission is to design systems that enhance efficiency, scalability, and user experience across complex operational workflows.
        </motion.p>
      </header>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* Key Strengths / Highlights */}
        {[
          { title: "Automotive Leadership", desc: "End-to-end dealership operations, service management, and inventory lifecycle optimization." },
          { title: "Software Engineering", desc: "Full-stack development, system architecture, and workflow automation." },
          { title: "Product & Systems Design", desc: "Operationally-driven software design that aligns with real-world workflows." },
          { title: "Strategy & Negotiation", desc: "Process optimization, vendor & partner negotiations, and data-driven decision making." },
        ].map((item) => (
          <motion.div
            key={item.title}
            className="glass rounded-2xl p-6 border backdrop-blur-md cursor-default"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>{item.title}</h3>
            <p className={`text-sm ${mutedText}`}>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
