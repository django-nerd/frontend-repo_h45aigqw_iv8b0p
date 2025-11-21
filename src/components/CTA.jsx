import React from 'react'
import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD] via-[#55B4E6] to-[#000A5A]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(800px_500px_at_20%_40%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(600px_400px_at_80%_60%,rgba(255,255,255,0.15),transparent_60%)]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold">Quote faster. Win more.</h2>
        <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Turn enquiries into booked surveys and accepted quotes with automated follow-ups and a beautiful customer experience.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a className="px-6 py-3 rounded-xl bg-white text-[#000A5A] font-semibold shadow-lg hover:scale-[1.02] transition" href="#">Start Free Demo</a>
          <a className="px-6 py-3 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition" href="#">Book a Call</a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: 'radial-gradient(400px circle at 50% 70%, rgba(255,255,255,0.25), transparent 40%)' }}
        />
      </div>
    </section>
  )
}
