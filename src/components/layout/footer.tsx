// src/components/layout/site-footer.tsx
"use client"

import Link from "next/link"
import { Mail, ArrowUpRight } from 'lucide-react';
import { availability } from "@/lib/availability";
import { socialLinks } from "./footer/socialLinks";
import { contactInfo } from "../contact/contact.data";
import { useThemeTokens } from "@/lib/theme/useThemeTokens";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const {
    textColor,
    subTextColor,

  } = useThemeTokens()

  return (
    <footer className="relative mt-32 border-t border-neutral-800/60">
      {/* Ambient glow */}
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-r from-indigo-500/10 via-cyan-400/10 to-purple-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand / Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
                SA
              </div>
              <div>
                <p className={`font-semibold ${textColor}`}>
                  Simon Abiodun Aina
                </p>
                <p className={`text-sm ${subTextColor}`}>
                  Automotive × Software Systems
                </p>
              </div>
            </div>

            <p className={`text-sm ${subTextColor} max-w-sm`}>
              Designing scalable systems at the intersection of
              automotive operations and modern software engineering.
            </p>

            {/* Availability badge */}
            <div className="flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${availability.available
                  ? "bg-emerald-400 animate-pulse"
                  : "bg-neutral-500"
                  }`}
              />
              <span className={`text-sm ${textColor}`}>
                {availability.available
                  ? "Open to opportunities"
                  : "Currently unavailable"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className={`text-sm font-semibold ${textColor} uppercase tracking-wide`}>
              Navigation
            </p>

            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Architecture", href: "#architecture" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`group inline-flex items-center gap-2 ${subTextColor} transition-colors hover:text-gray-500`}
                  >
                    {item.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Actions */}
          <div className="flex items-center gap-4">
            {socialLinks.map(
              ({ label, href, icon: Icon, hover }) =>
                href && (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`group flex h-11 w-11 items-center justify-center rounded-xl
            border border-neutral-800 bg-neutral-900/60 backdrop-blur
            transition-all hover:-translate-y-1 ${hover}`}
                  >
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                  </a>
                )
            )}

            {/* Email CTA */}
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="group flex h-11 w-11 items-center justify-center rounded-xl
      border border-neutral-800 bg-neutral-900/60 backdrop-blur
      transition-all hover:-translate-y-1
      hover:border-emerald-500/50 hover:shadow-[0_0_30px_-12px_rgba(16,185,129,0.8)]"
            >
              <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white" />
            </a>
          </div>


          {/* Bottom bar */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-800/60 pt-6">
            <p className={`text-xs ${textColor}`}>
              © {year} Simon Abiodun Aina. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-xs text-neutral-500">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
