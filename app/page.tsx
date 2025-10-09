"use client"

import { useEffect } from "react"

import { useState } from "react"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export default function ConferencePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <SiteHeader />

      {/* Hero Section ONLY */}
      <section
        id="home"
        className="relative min-h-[68vh] sm:min-h-[74vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background with KL skyline image */}
        <img
          src="/images/hero-kl.png"
          alt="Kuala Lumpur skyline at dusk with Petronas Towers"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 via-pink-500/5 to-rose-400/5"></div>
        <div className="absolute inset-0 bg-black/0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-16">
          <span className="inline-block rounded-full bg-white/70 text-pink-700 px-4 py-1 text-xs sm:text-sm font-semibold mb-4">
            2026 IAUP Asia Pacific
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-balance mb-3">
            Regional Conference
          </h1>
          <p className="text-white/95 text-base sm:text-xl md:text-2xl">Global Connections, Collective Growth</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/registration"
              className="rounded-full bg-white text-pink-700 px-6 py-3 font-semibold hover:bg-pink-50 transition"
            >
              Register ($150–$200)
            </Link>
            <Link
              href="/program"
              className="rounded-full bg-pink-600 text-white px-6 py-3 font-semibold hover:bg-pink-700 transition"
            >
              View Program
            </Link>
          </div>

          {/* Concise info strip for a more informative landing */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <div className="rounded-xl bg-white/85 backdrop-blur text-pink-700 font-semibold px-4 py-3">
              12–14 Jan 2026
            </div>
            <div className="rounded-xl bg-white/85 backdrop-blur text-pink-700 font-semibold px-4 py-3">
              Marriott Hotel Putrajaya
            </div>
            <div className="rounded-xl bg-white/85 backdrop-blur text-pink-700 font-semibold px-4 py-3">
              Fees: $150–$200
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section aria-labelledby="highlights" className="px-4 py-10 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 id="highlights" className="text-xl sm:text-2xl font-bold text-gray-900">
            Conference at a glance
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-pink-100 bg-rose-50/60 p-5">
              <div className="text-sm font-semibold text-rose-600">Theme</div>
              <div className="mt-1 text-gray-800">Global Connections, Collective Growth</div>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5">
              <div className="text-sm font-semibold text-amber-700">Tracks</div>
              <div className="mt-1 text-gray-800">Partnerships, Mobility, Research, Sustainability, and more</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="text-sm font-semibold text-gray-700">Audience</div>
              <div className="mt-1 text-gray-800">University leaders and partners across APAC</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
