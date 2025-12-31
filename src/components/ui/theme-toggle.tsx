"use client"

import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full px-4 py-2 text-sm border border-neutral-300 dark:border-neutral-700 backdrop-blur-md bg-white/60 dark:bg-black/40 hover:scale-105 transition"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
