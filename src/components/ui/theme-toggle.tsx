"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(id)
  }, [])

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full px-4 py-2 text-sm border border-neutral-300 dark:border-neutral-700 backdrop-blur-md bg-white/60 dark:bg-black/40 hover:scale-105 transition"
    >
      {/* Show server-default text until mounted to avoid hydration mismatch */}
      {mounted ? (theme === "dark" ? "🌙 Dark" : "☀️ Light") : "☀️ Light"}
    </button>
  )
}
