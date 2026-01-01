"use client"

import { ThemeToggle } from "@/components/ui/theme-toggle"
import { User, FolderGit2, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="flex items-center justify-between bg-gray-900/80 border border-gray-800 rounded-2xl p-2 backdrop-blur-xl">

          {/* Brand */}
          <div className="flex items-center gap-3 px-3">
            <div className="h-9 w-9 rounded-lg bg-gray-800 flex items-center justify-center">
              <span className="text-sm font-bold text-gray-200">SA</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-200">
                Simon A. Aina
              </p>
              <p className="text-xs text-gray-500">
                Automotive × Software
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex bg-gray-800/50 rounded-xl p-1">
            <a
              href="#about"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors
              text-gray-400 hover:text-white hover:bg-gray-800/70"
            >
              <User className="w-4 h-4" />
              About
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors
              text-gray-400 hover:text-white hover:bg-gray-800/70"
            >
              <FolderGit2 className="w-4 h-4" />
              Projects
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors
              text-gray-400 hover:text-white hover:bg-gray-800/70"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2 pr-2">
            <ThemeToggle />
          </div>

        </div>
      </div>
    </header>
  )
}
