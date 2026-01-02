"use client"

import { JsonLd } from "@/components/seo/json-ld"
import { contactSchema } from "@/lib/schema/contact-schema"
import { useTheme } from "next-themes"

export function ContactSection() {
  const { theme } = useTheme()

  // Theme-aware tokens
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor = theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const badgeBg = theme === "light" ? "bg-white/40" : "bg-white/5"
  const badgeBorder = theme === "light" ? "border-neutral-400/40" : "border-neutral-700"

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <JsonLd schema={contactSchema} />

      <header className="mb-12">
        <h2 className={`text-3xl font-semibold ${textColor}`}>Contact & Availability</h2>
        <p className={`${subTextColor} max-w-2xl`}>
          I’m open to collaborations, consulting, and full-time opportunities in automotive and software systems.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="glass rounded-2xl p-6 border backdrop-blur-xl">
          <h3 className={`text-lg font-semibold ${textColor} mb-4`}>Reach Me At</h3>
          <ul className="space-y-3">
            <li>
              <strong className={`${subTextColor}`}>Email:</strong>{" "}
              <a href={`mailto:${contactSchema.email}`} className={`underline ${textColor}`}>
                {contactSchema.email.replace("mailto:", "")}
              </a>
            </li>
            <li>
              <strong className={`${subTextColor}`}>Phone:</strong>{" "}
              <span className={textColor}>{contactSchema.telephone}</span>
            </li>
            <li>
              <strong className={`${subTextColor}`}>Website:</strong>{" "}
              <a href={contactSchema.url} className={`underline ${textColor}`} target="_blank">
                {contactSchema.url}
              </a>
            </li>
          </ul>
        </div>

        <div className="glass rounded-2xl p-6 border backdrop-blur-xl">
          <h3 className={`text-lg font-semibold ${textColor} mb-4`}>Available Channels</h3>
          <div className="flex flex-wrap gap-3">
            {contactSchema.contactPoint.map((cp) => (
              <span
                key={cp.contactType}
                className={`px-3 py-1 rounded-full border ${badgeBorder} ${badgeBg} ${textColor}`}
              >
                {cp.contactType}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
