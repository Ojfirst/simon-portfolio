"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { availability } from "@/lib/availability"

export function AvailabilityBadge() {
  const { theme } = useTheme()

  const textColor = theme === "light" ? "text-neutral-900" : "text-white"
  const subTextColor = theme === "light" ? "text-neutral-700" : "text-neutral-400"
  const badgeBg = theme === "light" ? "bg-white/40" : "bg-white/5"
  const badgeBorder = theme === "light" ? "border-neutral-400/40" : "border-neutral-700"

  if (!availability.available) return null

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-xl cursor-pointer ${badgeBg} ${badgeBorder}`}
    >
      {/* status dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>

      <span className={`text-sm font-medium ${textColor}`}>
        {availability.status}
      </span>

      <span className={`text-xs ${subTextColor}`}>
        {availability.employmentTypes.join(" • ")}
      </span>
    </motion.div>
  )
}
