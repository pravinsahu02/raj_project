"use client"

import { SiteHeader } from "@/components/site-header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="pt-20 sm:pt-24">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Contact Us</h1>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 rounded-2xl border p-6 bg-white shadow-sm">
              <h2 className="font-semibold text-gray-900">Conference Secretariat</h2>
              <p className="mt-3 text-gray-700">
                INTI International University, Nilai, Malaysia
                <br />
                Marriott Hotel Putrajaya (Venue)
              </p>
              <div className="mt-3 text-gray-700">
                <div>Email: iaup-apac@inti.edu.my</div>
                <div>Phone: +60 (0)3-0000 0000</div>
              </div>
            </div>
            <form className="lg:col-span-2 rounded-2xl border p-6 bg-gray-50 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="px-4 py-3 rounded-lg border" placeholder="Full name *" aria-label="Full name" />
                <input className="px-4 py-3 rounded-lg border" placeholder="Email *" type="email" aria-label="Email" />
              </div>
              <input className="mt-4 w-full px-4 py-3 rounded-lg border" placeholder="Subject *" aria-label="Subject" />
              <textarea
                className="mt-4 w-full px-4 py-3 rounded-lg border"
                rows={5}
                placeholder="Message *"
                aria-label="Message"
              />
              <button className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
