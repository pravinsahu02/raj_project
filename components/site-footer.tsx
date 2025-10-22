export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/inti-logo.png" alt="INTI International University" className="h-8 sm:h-10 w-auto" />
          <span className="text-sm text-gray-600">IAUP Asia Pacific Regional Conference</span>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} INTI International University. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
