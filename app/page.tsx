"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Calendar, MapPin, Users, Mail, Phone, Globe, Menu, X } from "lucide-react"

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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="text-xl sm:text-2xl font-bold">
                <span className={`${scrolled ? "text-gray-900" : "text-white"}`}>IAUP 2026</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {["HOME", "ABOUT", "PROGRAM", "REGISTRATION", "VENUE", "CONTACT"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    scrolled ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-200"
                  } ${activeSection === item.toLowerCase() ? "text-pink-600" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {["HOME", "ABOUT", "PROGRAM", "REGISTRATION", "VENUE", "CONTACT"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with KL skyline image */}
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YPD1f1zCPdo8v9IbUm70tSD2QSApTT.png"
            alt="Kuala Lumpur Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 via-pink-500/70 to-rose-400/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
          <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-40 w-48 sm:w-64 h-48 sm:h-64 bg-pink-300/10 rounded-full blur-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-0">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-4">
              2026 IAUP
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            IAUP Asia Pacific
            <br />
            Regional Conference
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-8 sm:mb-12 px-4">
            Global Connections, Collective Growth
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 mx-auto" />
              <div className="text-white font-semibold mb-1 text-sm sm:text-base">Event</div>
              <div className="text-white/90 text-xs sm:text-sm">12-14 January 2026</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 mx-auto" />
              <div className="text-white font-semibold mb-1 text-sm sm:text-base">Location</div>
              <div className="text-white/90 text-xs sm:text-sm">Marriott Hotel Putrajaya</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 mx-auto" />
              <div className="text-white font-semibold mb-1 text-sm sm:text-base">Host</div>
              <div className="text-white/90 text-xs sm:text-sm">INTI International University</div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("registration")}
            className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-pink-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Register Now
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">About The Conference</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gcbg93ajzUZHkLacrfWRLwLLIWr8fR.png"
                alt="Conference"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-96 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                The IAUP Asia Pacific Regional Conference will convene university presidents, vice chancellors, and
                senior leaders from Malaysia, Asia Pacific, and beyond to celebrate IAUP's six decades of advancing
                international academic leadership.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                The event will emphasize international collaboration as a driver of collective growth, building stronger
                ecosystems for learning, research, and sustainable development.
              </p>
              <div className="bg-gradient-to-r from-pink-600 to-rose-400 text-white p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">50-60</div>
                <div className="text-sm">Expected Senior Leaders & Delegates</div>
              </div>
            </div>
          </div>

          {/* INTI Banner */}
          <div className="mb-12 sm:mb-16">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A8Xa2G3cfUqtbHO9dFLOr2D4C65Xtx.png"
              alt="INTI International University"
              className="rounded-2xl shadow-2xl w-full h-48 sm:h-64 md:h-80 object-cover"
            />
          </div>

          {/* Campus Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qfx4YuquofDFCPabejMApI5CAzxnX2.png"
              alt="INTI Campus"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">INTI International University</h3>
                <p className="text-lg">State-of-the-art campus facilities</p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Objectives</h3>
              <ul className="space-y-4">
                {[
                  "Celebrate IAUP's 60th Anniversary",
                  "Provide strategic dialogue platform",
                  "Advance internationalization & collaboration",
                  "Strengthen IAUP's visibility in Asia Pacific",
                  "Highlight Malaysia's higher education leadership",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-rose-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-600 to-rose-400 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Expected Outcomes</h3>
              <ul className="space-y-4">
                {[
                  "IAUP Regional Declaration with actionable strategies",
                  "Stronger IAUP presence in Asia Pacific",
                  "Expansion of institutional partnerships",
                  "Enhanced recognition of Malaysia as education hub",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Conference Tracks</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Global Connections, Collective Growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cross-Border Partnerships", icon: "🌐" },
              { title: "Mobility and Exchange", icon: "✈️" },
              { title: "Technology as a Bridge", icon: "💻" },
              { title: "Global Competencies", icon: "🎓" },
              { title: "Shared Research Impact", icon: "🔬" },
              { title: "Global Capital Flows", icon: "💰" },
              { title: "Sustainable Ecosystems", icon: "🌱" },
              { title: "Role of Associations", icon: "🤝" },
            ].map((track, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-pink-300 hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{track.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section id="program" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Program Schedule</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-rose-400 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-sm">JAN</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Day 1 - Monday</h3>
                    <p className="text-white/90">Arrival & Welcome</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="text-pink-600 font-semibold min-w-[100px]">All Day</div>
                  <div>
                    <div className="font-semibold text-gray-900">Arrival of Delegates</div>
                    <div className="text-gray-600 text-sm">Check-in at Marriott Hotel Putrajaya</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-pink-600 font-semibold min-w-[100px]">Evening</div>
                  <div>
                    <div className="font-semibold text-gray-900">Welcome Reception</div>
                    <div className="text-gray-600 text-sm">Networking and refreshments</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-rose-400 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                    <div className="text-3xl font-bold">13</div>
                    <div className="text-sm">JAN</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Day 2 - Tuesday</h3>
                    <p className="text-white/90">Main Conference Day</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="text-pink-600 font-semibold min-w-[100px]">Morning</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-gray-900">Opening Ceremony</div>
                      <div className="text-gray-600 text-sm">
                        Welcome by Prof. Dr. Joseph Lee, Vice Chancellor, INTI
                      </div>
                      <div className="text-gray-600 text-sm">Remarks by IAUP Leadership</div>
                      <div className="text-gray-600 text-sm">
                        Guest of Honour: Minister of Higher Education Malaysia
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Keynote Address</div>
                      <div className="text-gray-600 text-sm">Global Connections, Collective Growth</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-pink-600 font-semibold min-w-[100px]">Afternoon</div>
                  <div>
                    <div className="font-semibold text-gray-900">Plenary Sessions & Track Discussions</div>
                    <div className="text-gray-600 text-sm">Parallel sessions on conference tracks</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-pink-600 font-semibold min-w-[100px]">Evening</div>
                  <div>
                    <div className="font-semibold text-gray-900">IAUP Conference Dinner</div>
                    <div className="text-gray-600 text-sm">Gala dinner with cultural performances</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                    <div className="text-3xl font-bold">14</div>
                    <div className="text-sm">JAN</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Day 3 - Wednesday</h3>
                    <p className="text-white/90">Closing & Optional Tour</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="text-amber-600 font-semibold min-w-[100px]">Morning</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-gray-900">Special Keynotes</div>
                      <div className="text-gray-600 text-sm">CEO of MQA (Malaysian Qualifications Agency)</div>
                      <div className="text-gray-600 text-sm">CEO of EMGS (Education Malaysia Global Services)</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Panel Discussions & Closing Session</div>
                      <div className="text-gray-600 text-sm">Final discussions and Q&A</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Adoption of IAUP Regional Declaration</div>
                      <div className="text-gray-600 text-sm">Official declaration signing</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-amber-600 font-semibold min-w-[100px]">Afternoon</div>
                  <div>
                    <div className="font-semibold text-gray-900">Optional Cultural/Educational Tour</div>
                    <div className="text-gray-600 text-sm">Tunku Ja'afar Gallery & Kolej Tunku Ja'afar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Registration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Secure your spot at this landmark event</p>
          </div>

          {/* Registration Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-pink-600 to-rose-400 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">$200-300</div>
              <div className="text-sm">Registration Fee (USD)</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">50-60</div>
              <div className="text-sm">Expected Delegates</div>
            </div>
            <div className="bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">3 Days</div>
              <div className="text-sm">Conference Duration</div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Register Now</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="john.doe@university.edu"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Institution/University *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your University Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position/Title *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="e.g., President, Vice Chancellor, Dean"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="+60 12 345 6789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Requirements / Special Needs
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Please let us know if you have any dietary restrictions or special requirements"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="optional-tour"
                  className="mt-1 w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                />
                <label htmlFor="optional-tour" className="text-sm text-gray-700">
                  I would like to join the optional cultural/educational tour on Day 3
                </label>
              </div>

              <button className="w-full bg-gradient-to-r from-pink-600 to-rose-400 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-[1.02]">
                Submit Registration
              </button>

              <p className="text-sm text-gray-600 text-center">
                * Required fields. You will receive a confirmation email with payment instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue & Location */}
      <section id="venue" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Venue & Location</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Marriott Hotel Putrajaya</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">IOI Resort City, 62502 Putrajaya, Malaysia</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+60 3-8949 8888</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Website</div>
                      <div className="text-gray-600">marriott.com/putrajaya</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-600 to-rose-400 rounded-2xl p-8 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Getting There</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✈️</span>
                    <div>
                      <div className="font-semibold">From KLIA Airport</div>
                      <div className="text-white/90 text-sm">25 minutes by car</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🚗</span>
                    <div>
                      <div className="font-semibold">From Kuala Lumpur City</div>
                      <div className="text-white/90 text-sm">30 minutes via highway</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🚆</span>
                    <div>
                      <div className="font-semibold">Public Transport</div>
                      <div className="text-white/90 text-sm">KLIA Transit to Putrajaya & Cyberjaya Station</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5267890123456!2d101.6789!3d2.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTUnMjQuNCJOIDEwMcKwNDAnNDQuMCJF!5e0!3m2!1sen!2smy!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[500px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Have questions? We're here to help</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-600 to-rose-400 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Conference Secretariat</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-white/90">iaup2026@newinti.edu.my</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-white/90">+60 6-798 2000</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-white/90">
                      INTI International University
                      <br />
                      Persiaran Perdana BBN
                      <br />
                      Putra Nilai, 71800 Nilai
                      <br />
                      Negeri Sembilan, Malaysia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-600 to-rose-400 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IAUP 2026</h3>
              <p className="text-gray-400">
                Asia Pacific Regional Conference celebrating 60 years of international academic leadership.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("program")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Program
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("registration")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Registration
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("venue")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Venue
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Important Dates</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📅 Jan 12: Arrival & Welcome</li>
                <li>📅 Jan 13: Main Conference</li>
                <li>📅 Jan 14: Closing & Tour</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 IAUP Asia Pacific Regional Conference. Hosted by INTI International University.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
