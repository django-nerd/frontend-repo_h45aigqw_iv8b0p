import React from 'react'

export default function Navbar(){
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl px-5 py-3 shadow-[0_15px_60px_-20px_rgba(13,110,253,0.35)]">
          <a href="#" className="flex items-center gap-2 text-[#000A5A] font-extrabold tracking-tight">
            <span className="inline-block w-3 h-3 rounded-full bg-[#0D6EFD]" />
            Quotestack
          </a>
          <nav className="hidden md:flex items-center gap-6 text-[#000A5A]/80 text-sm">
            <a href="#features" className="hover:text-[#0D6EFD]">Features</a>
            <a href="#how" className="hover:text-[#0D6EFD]">How it works</a>
            <a href="#pricing" className="hover:text-[#0D6EFD]">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-[#000A5A]/80">Sign in</a>
            <a href="#pricing" className="text-sm font-semibold px-4 py-2 rounded-xl bg-[#0D6EFD] text-white hover:brightness-110">Start Demo</a>
          </div>
        </div>
      </div>
    </header>
  )
}
