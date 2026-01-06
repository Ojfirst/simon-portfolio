"use client"

import { useMounted } from "@/hooks/use-unmounted"

export function ThemeGuard({ children }: { children: React.ReactNode }) {
  const mounted = useMounted()

  if (!mounted) return null

  return <>{children}</>
}
