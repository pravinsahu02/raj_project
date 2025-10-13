"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/program", label: "PROGRAM" },
  { href: "/registration", label: "REGISTRATION" },
  { href: "/venue", label: "VENUE" },
  { href: "/contact", label: "CONTACT" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false) // close menu on route change
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="INTI International University - Home">
          <img src="/images/inti-logo.png" alt="INTI International University" className="h-8 sm:h-10 w-auto" />
          <span className="sr-only">INTI International University</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm ${
                  pathname === item.href ? "text-pink-600" : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
