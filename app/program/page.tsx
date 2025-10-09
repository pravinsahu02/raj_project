"use client"

import { SiteHeader } from "@/components/site-header"

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="pt-20 sm:pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Program Schedule</h1>
          <p className="mt-2 text-gray-600">12–14 January 2026 · Marriott Hotel Putrajaya</p>

          <div className="mt-8 space-y-8">
            {[
              {
                day: "Day 1 · Monday · 12 Jan",
                color: "from-pink-600 to-rose-400",
                items: [
                  { time: "All Day", title: "Arrival of Delegates", notes: "Hotel check‑in at Marriott Putrajaya" },
                  { time: "18:00", title: "Welcome Reception", notes: "Networking & refreshments" },
                ],
              },
              {
                day: "Day 2 · Tuesday · 13 Jan",
                color: "from-rose-600 to-amber-500",
                items: [
                  { time: "09:00", title: "Opening Ceremony", notes: "INTI & IAUP leadership addresses" },
                  { time: "10:00", title: "Keynote: Global Connections", notes: "Collective Growth in Higher Ed" },
                  { time: "11:15", title: "Plenary I", notes: "Cross-border partnerships" },
                  { time: "14:00", title: "Track Sessions", notes: "Parallel tracks A–D" },
                  { time: "19:00", title: "IAUP Conference Dinner", notes: "Cultural performances" },
                ],
              },
              {
                day: "Day 3 · Wednesday · 14 Jan",
                color: "from-amber-500 to-orange-500",
                items: [
                  { time: "09:00", title: "Keynotes", notes: "Leaders from MQA & EMGS" },
                  { time: "10:30", title: "Plenary II & Closing", notes: "Q&A and adoption of declaration" },
                  { time: "14:00", title: "Optional Tour", notes: "Kuala Lumpur cultural/educational visits" },
                ],
              },
            ].map((d) => (
              <div key={d.day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${d.color} text-white p-6`}>
                  <h2 className="text-2xl font-bold">{d.day}</h2>
                </div>
                <div className="p-6 divide-y divide-gray-100">
                  {d.items.map((it, i) => (
                    <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="sm:w-28 font-semibold text-pink-600">{it.time}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{it.title}</div>
                        <div className="text-gray-600 text-sm">{it.notes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tracks overview */}
          <h2 className="mt-12 text-2xl font-bold text-gray-900">Conference Tracks</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Partnerships",
              "Mobility",
              "Tech as a Bridge",
              "Global Competencies",
              "Shared Research",
              "Capital Flows",
              "Sustainability",
              "Associations’ Role",
            ].map((t) => (
              <div key={t} className="rounded-xl border bg-white p-4 hover:shadow-md transition">
                <div className="font-semibold text-gray-900">{t}</div>
                <p className="text-gray-600 text-sm mt-1">
                  Short thematic discussions, case studies, and collaboration clinics.
                </p>
              </div>
            ))}
          </div>

          {/* Friendly callout for more detail */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
            <p className="font-semibold">
              Full program booklet will be available on-site. Track proposals and session chairs are announced in
              Registration updates.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
