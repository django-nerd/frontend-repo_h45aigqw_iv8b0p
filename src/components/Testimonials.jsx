import React from 'react'
import { motion } from 'framer-motion'

const data = [
  { name: 'Mark H.', role: 'Director, CoolAir Installations', quote: 'We reduced quote turnaround from 2 days to under 20 minutes and our win rate jumped 15%.' },
  { name: 'Sophie R.', role: 'Ops Manager, North HVAC', quote: 'The widget brings us consistent leads and the follow-ups mean no one slips through.' },
  { name: 'Jay P.', role: 'Owner, Perfect Climate', quote: 'Pricing is consistent, margins are protected and the team finally ditched the spreadsheets.' },
]

export default function Testimonials(){
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000A5A]">Trusted by modern HVAC teams</h2>
          <p className="mt-3 text-gray-600">Real results from contractors growing with instant quoting.</p>
        </div>
        <div className="mt-12 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6 w-[200%]"
          >
            {[...data, ...data, ...data].map((t, i)=> (
              <div key={i} className="w-1/3 min-w-[320px] rounded-2xl bg-white border border-blue-100 p-6 shadow-[0_15px_50px_-20px_rgba(13,110,253,0.2)]">
                <div className="text-[#000A5A] font-medium">“{t.quote}”</div>
                <div className="mt-4 text-sm text-gray-600">{t.name} • {t.role}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
