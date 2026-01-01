"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()

  // resolvedTheme ensures correct theme even when system preference is used
  const currentTheme: "light" | "dark" = resolvedTheme === "dark" ? "dark" : "light"

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
