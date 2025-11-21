import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TiltCard from './TiltCard'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -120])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD] via-[#55B4E6] to-[#000A5A]" />
        <div className="absolute inset-0 opacity-40"
             style={{
               background:
                 'radial-gradient(1000px 600px at 20% 20%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(800px 500px at 80% 60%, rgba(255,255,255,0.15), transparent 60%)'
             }}
        />
        <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] rounded-full blur-3xl opacity-40"
             style={{ background: 'conic-gradient(from 0deg, rgba(13,110,253,0.35), rgba(0,10,90,0.6))' }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div style={{ scale }} className="text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Quote smarter. Sell faster.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-blue-100/90">
              The all-in-one AC quoting and automation platform built for HVAC contractors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="inline-flex items-center rounded-xl bg-white text-[#000A5A] font-semibold px-6 py-3 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition">
                Start Free Demo
              </a>
              <a href="#video" className="inline-flex items-center rounded-xl bg-[#0D6EFD]/20 text-white font-semibold px-6 py-3 border border-white/30 hover:bg-white/20 transition">
                Watch Product Video
              </a>
            </div>
            <div className="mt-10 flex gap-6 text-blue-100/80">
              <Stat label="Quotes sent" value={"12,483"} />
              <Stat label="Avg. conversion" value={"41%"} />
              <Stat label="Pipeline value" value={"$3.2m"} />
            </div>
          </motion.div>

          <div className="relative h-[520px]">
            <motion.div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-10" />
            <div className="absolute right-4 top-6 left-4 bottom-6 grid grid-cols-3 gap-6">
              <TiltCard className="col-span-2 p-4">
                <UICard title="Quotestack Dashboard">
                  <div className="h-32 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-blue-200 to-blue-100/40" />
                    <div className="rounded-xl bg-gradient-to-br from-blue-200 to-blue-100/40" />
                    <div className="rounded-xl bg-gradient-to-br from-blue-200 to-blue-100/40" />
                  </div>
                  <div className="mt-4 h-24 rounded-xl bg-gradient-to-tr from-[#0D6EFD]/20 to-white/60" />
                </UICard>
              </TiltCard>
              <TiltCard className="col-span-1 p-4">
                <UICard title="Website Quote Widget">
                  <div className="h-48 rounded-xl bg-gradient-to-tr from-[#55B4E6]/30 to-white/70" />
                </UICard>
              </TiltCard>
              <TiltCard className="col-span-1 p-4">
                <UICard title="Quote Summary">
                  <div className="space-y-2">
                    {[1,2,3].map((i)=> (
                      <div key={i} className="h-6 rounded-md bg-gradient-to-r from-[#0D6EFD]/20 to-white/60" />
                    ))}
                    <div className="h-10 rounded-lg bg-[#0D6EFD] shadow-lg shadow-blue-600/30" />
                  </div>
                </UICard>
              </TiltCard>
              <TiltCard className="col-span-2 p-4">
                <UICard title="Follow-ups & Tracking">
                  <div className="h-40 rounded-xl bg-gradient-to-br from-[#0D6EFD]/10 to-white/70" />
                </UICard>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UICard({ title, children }){
  return (
    <div className="relative rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl p-4">
      <div className="text-xs font-semibold tracking-wide text-[#000A5A]/70 mb-3">{title}</div>
      {children}
    </div>
  )
}

function Stat({ label, value }){
  return (
    <div className="">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs uppercase tracking-wider opacity-80">{label}</div>
    </div>
  )
}
