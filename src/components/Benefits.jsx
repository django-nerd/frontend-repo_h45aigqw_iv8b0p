import React from 'react'
import { motion } from 'framer-motion'
import { Timer, Trophy, CalendarCheck2, ShieldCheck, InboxZero, BarChart2 } from 'lucide-react'

const benefits = [
  { icon: Timer, text: 'Respond faster to every enquiry' },
  { icon: Trophy, text: 'Win more jobs with instant quotes' },
  { icon: CalendarCheck2, text: 'Save hours on admin every week' },
  { icon: ShieldCheck, text: 'Protect your profit on every job' },
  { icon: InboxZero, text: 'Never lose a lead again' },
  { icon: BarChart2, text: 'Scale your business without extra office staff' },
]

export default function Benefits(){
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000A5A]">Built for HVAC businesses</h2>
          <p className="mt-3 text-gray-600">Simple, clear outcomes that move revenue and save time.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {benefits.map((b, i)=> (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-100"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0D6EFD]/10 to-[#55B4E6]/20 text-[#0D6EFD] flex items-center justify-center">
                <b.icon size={18} />
              </div>
              <div className="text-[#000A5A]">{b.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
