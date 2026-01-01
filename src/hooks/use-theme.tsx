// src/hooks/use-theme.tsx
"use client"

import { useTheme as nextUseTheme } from "next-themes"

export function useTheme() {
  const { theme, resolvedTheme, setTheme } = nextUseTheme()
  return { theme, resolvedTheme, setTheme }
}
