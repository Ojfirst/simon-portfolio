import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between glass">
        <span className="font-semibold tracking-tight">
          Simon A. Aina
        </span>

        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm opacity-80 hover:opacity-100">
            About
          </a>
          <a href="#projects" className="text-sm opacity-80 hover:opacity-100">
            Projects
          </a>
          <a href="#contact" className="text-sm opacity-80 hover:opacity-100">
            Contact
          </a>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
