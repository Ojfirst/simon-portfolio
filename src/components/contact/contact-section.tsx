"use client"

import { JsonLd } from "@/components/seo/json-ld"
import { contactSchema } from "@/lib/schema/contact-schema"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { useState } from "react"

export function ContactSection() {
  const { theme } = useTheme()

  // 🔁 Theme-aware tokens (MANDATORY RULE)
  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor =
    theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const mutedText =
    theme === "light" ? "text-neutral-600" : "text-neutral-500"
  const badgeBg = theme === "light" ? "bg-white/40" : "bg-white/5"
  const badgeBorder =
    theme === "light" ? "border-neutral-400/40" : "border-neutral-700"

  const panelBg =
    theme === "light"
      ? "bg-white/60 border-neutral-300"
      : "bg-neutral-950/70 border-neutral-800"

  // ------------------------
  // FORM STATE
  // ------------------------
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validate() {
    if (!form.name.trim()) return "Name is required"
    if (!form.email.includes("@")) return "Valid email required"
    if (form.message.length < 10)
      return "Message should be at least 10 characters"
    return null
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const error = validate()
    if (error) {
      toast.error(error)
      return
    }

    setLoading(true)

    // Simulated submission (replace with API later)
    setTimeout(() => {
      setLoading(false)
      setForm({ name: "", email: "", message: "" })
      toast.success("Message sent successfully 🚀")
    }, 1200)
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <JsonLd schema={contactSchema} />

      {/* HEADER */}
      <motion.header
        className="mb-14"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={`text-3xl font-semibold ${textColor}`}>
          Contact & Availability
        </h2>
        <p className={`${subTextColor} max-w-2xl mt-2`}>
          Open to senior roles, consulting, and system-level collaboration across
          automotive and software platforms.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT — CONTACT DETAILS */}
        <motion.div
          className={`glass rounded-2xl border backdrop-blur-xl p-6 ${panelBg}`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <h3 className={`text-lg font-semibold ${textColor} mb-4`}>
            Reach Me At
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <span className={mutedText}>Email</span>
              <div>
                <a
                  href={`mailto:${contactSchema.email}`}
                  className={`underline ${textColor} hover:opacity-80`}
                >
                  {contactSchema.email.replace("mailto:", "")}
                </a>
              </div>
            </li>

            <li>
              <span className={mutedText}>Phone</span>
              <div className={textColor}>{contactSchema.telephone}</div>
            </li>

            <li>
              <span className={mutedText}>Website</span>
              <div>
                <a
                  href={contactSchema.url}
                  target="_blank"
                  className={`underline ${textColor} hover:opacity-80`}
                >
                  {contactSchema.url}
                </a>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-6">
            {contactSchema.contactPoint.map((cp) => (
              <motion.span
                key={cp.contactType}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-full border ${badgeBorder} ${badgeBg} ${textColor}`}
              >
                {cp.contactType}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — CONTACT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className={`glass rounded-2xl border backdrop-blur-xl p-6 lg:col-span-2 ${panelBg}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-lg font-semibold ${textColor} mb-6`}>
            Send a Message
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={`rounded-xl px-4 py-3 bg-transparent border ${badgeBorder} ${textColor}`}
            />

            <input
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className={`rounded-xl px-4 py-3 bg-transparent border ${badgeBorder} ${textColor}`}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={`w-full rounded-xl px-4 py-3 bg-transparent border ${badgeBorder} ${textColor}`}
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`mt-6 px-6 py-3 rounded-xl border text-white bg-neutral-900 ${badgeBorder} hover:bg-neutral-800`}
          >
            {loading ? "Sending…" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
