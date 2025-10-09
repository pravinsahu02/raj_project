"use client"

import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="pt-20 sm:pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">About The Conference</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The IAUP Asia Pacific Regional Conference convenes university leaders to accelerate international
            partnerships and celebrate IAUP’s 60-year legacy. Our 2026 theme, “Global Connections, Collective Growth,”
            spotlights mobility, shared research, and sustainable ecosystems for higher education.
          </p>

          {/* High‑res INTI banner */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-[#2a0a0a] via-[#5a0a0a] to-[#7a0f0f]">
            <img
              src="/images/global-excellence.png"
              alt="INTI International University - Advancing Global Excellence (QS Rankings)"
              className="w-full h-[46vh] sm:h-[56vh] md:h-[70vh] lg:h-[80vh] object-contain md:object-cover"
            />
          </div>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="rounded-xl p-5 bg-gradient-to-br from-pink-600 to-rose-500 text-white">
              <div className="text-sm opacity-90">Dates</div>
              <div className="text-xl font-bold">12–14 Jan 2026</div>
            </div>
            <div className="rounded-xl p-5 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
              <div className="text-sm opacity-90">Venue</div>
              <div className="text-xl font-bold">Marriott Hotel Putrajaya</div>
            </div>
            <div className="rounded-xl p-5 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
              <div className="text-sm opacity-90">Theme</div>
              <div className="text-xl font-bold">Global Connections, Collective Growth</div>
            </div>
            <div className="rounded-xl p-5 bg-gray-900 text-white">
              <div className="text-sm opacity-90">Delegates</div>
              <div className="text-xl font-bold">50–60 expected</div>
            </div>
          </div>

          {/* Expanded narrative and tracks summary */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900">Purpose & Outcomes</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Hosted by INTI International University with IAUP, the conference advances Asia Pacific collaboration
                through leadership dialogues, partnership clinics, and immersive experiences. Outcomes include a shared
                declaration to foster mobility, co-authored research, and sustainable higher‑education ecosystems.
              </p>
              <h3 className="mt-6 font-semibold text-gray-900">Tracks</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                <li className="rounded-lg border p-3">Partnerships & Consortia</li>
                <li className="rounded-lg border p-3">Student & Faculty Mobility</li>
                <li className="rounded-lg border p-3">Technology as a Bridge</li>
                <li className="rounded-lg border p-3">Global Competencies</li>
                <li className="rounded-lg border p-3">Shared Research & Innovation</li>
                <li className="rounded-lg border p-3">Capital Flows & Funding</li>
                <li className="rounded-lg border p-3">Sustainability & SDGs</li>
                <li className="rounded-lg border p-3">Associations’ Role</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/inti-campus-new.png"
                alt="INTI International University main entrance"
                className="w-full h-full min-h-[320px] object-cover"
              />
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Leadership Dialogues", desc: "Keynotes and strategic forums with global university leaders." },
              { title: "Partnership Labs", desc: "Curated sessions to seed cross-border collaborations." },
              { title: "Regional Impact", desc: "A shared declaration to advance Asia Pacific higher education." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-gray-700">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Why attend */}
          <div className="mt-10 rounded-2xl bg-white border shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900">Why attend</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <li className="rounded-lg border p-3">Meet 50–60 leaders shaping higher education across APAC</li>
              <li className="rounded-lg border p-3">Spark bilateral and multilateral agreements in partnership labs</li>
              <li className="rounded-lg border p-3">Explore co-authored research and joint innovation programs</li>
              <li className="rounded-lg border p-3">Align with sustainability and SDG‑focused initiatives</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
