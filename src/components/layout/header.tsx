"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { User, FolderGit2, Mail, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Mail },
]

export function Header() {
  const isMobile = useMobile()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="relative flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/80 p-2 backdrop-blur-xl">

          {/* Brand */}
          <div className="flex items-center gap-3 px-3">
            <div className="h-9 w-9 rounded-lg bg-neutral-800 flex items-center justify-center">
              <span className="text-sm font-bold text-neutral-200">SA</span>
            </div>

            {!isMobile && (
              <div className="leading-tight">
                <p className="text-sm font-semibold text-neutral-200">
                  Simon A. Aina
                </p>
                <p className="text-xs text-neutral-500">
                  Automotive × Software
                </p>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex bg-neutral-800/50 rounded-xl p-1">
              {navItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                  text-neutral-400 transition-colors
                  hover:text-white hover:bg-neutral-800/70"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </nav>
          )}

          {/* Controls */}
          <div className="flex items-center gap-2 pr-2">
            <ThemeToggle />

            {isMobile && (
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-lg
                border border-neutral-800 bg-neutral-900/60
                text-neutral-300 hover:text-white"
                aria-label="Toggle navigation"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobile && open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-full left-0 right-0 mt-3
                rounded-2xl border border-neutral-800 bg-neutral-900/90
                backdrop-blur-xl p-4"
              >
                <nav className="flex flex-col gap-2">
                  {navItems.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3
                      text-neutral-300 transition-colors
                      hover:bg-neutral-800 hover:text-white"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </header>
  )
}
