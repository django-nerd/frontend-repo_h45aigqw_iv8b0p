import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, FileSpreadsheet, Clock, BellOff, BarChart2 } from 'lucide-react'

const items = [
  { icon: Clock, title: 'Slow manual quoting', desc: 'Hours lost building quotes and chasing parts.' },
  { icon: FileSpreadsheet, title: 'Spreadsheets everywhere', desc: 'Inconsistent, error-prone sheets and versions.' },
  { icon: BellOff, title: 'Missed or forgotten leads', desc: 'No automatic follow-up or reminders.' },
  { icon: AlertTriangle, title: 'No consistent follow-up', desc: 'Leads go cold without a system.' },
  { icon: BarChart2, title: "Hard to track what's working", desc: 'No clear view of pipeline and conversion.' },
]

export default function Problem(){
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000A5A]">Why quoting is broken</h2>
          <p className="mt-3 text-gray-600">Meet the pain points that slow AC businesses every day.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx)=> (
            <motion.div
              key={idx}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl bg-white p-6 border border-blue-100 shadow-[0_10px_40px_-10px_rgba(13,110,253,0.15)] hover:shadow-blue-500/20 hover:-translate-y-0.5 transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D6EFD]/10 to-[#55B4E6]/20 flex items-center justify-center text-[#0D6EFD]">
                  <it.icon />
                </div>
                <div>
                  <div className="font-semibold text-[#000A5A]">{it.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{it.desc}</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#55B4E6]/30 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
