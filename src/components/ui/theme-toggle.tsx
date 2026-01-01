"use client"

import { useTheme } from "../../hooks/use-theme"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component only renders after mounting (client-side)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null // prevents SSR mismatch

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
