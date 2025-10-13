"use client"

import { SiteHeader } from "@/components/site-header"

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="pt-20 sm:pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Venue & Location</h1>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/marriott-putrajaya-hero.png"
                  alt="Marriott Hotel Putrajaya exterior"
                  className="w-full h-[360px] object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/marriott-putrajaya-2.jpg"
                  alt="Marriott Hotel Putrajaya exterior facade"
                  className="w-full h-[360px] object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/marriott-putrajaya-3.jpg"
                  alt="Marriott Hotel Putrajaya at sunset"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl min-h-[520px]">
              <iframe
                src="https://www.google.com/maps?q=Marriott+Hotel+Putrajaya&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="min-h-[520px]"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-gray-700 mt-1">IOI Resort City, 62502 Putrajaya, Malaysia</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="text-xl font-semibold">Getting There</h2>
              <ul className="text-gray-700 mt-2 list-disc pl-5 space-y-1">
                <li>25 minutes from KLIA (by car)</li>
                <li>30 minutes from Kuala Lumpur city</li>
                <li>KLIA Transit to Putrajaya & Cyberjaya Station</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
