import React from 'react'
import TiltCard from './TiltCard'
import { motion } from 'framer-motion'
import { Rocket, Cpu, Widget, MailCheck, Activity, History, Wrench, Upload } from 'lucide-react'

const features = [
  { title: 'Instant AC quotes', icon: Rocket },
  { title: 'Smart equipment selection', icon: Cpu },
  { title: 'Branded website widget', icon: Widget },
  { title: 'Automated email & SMS follow-ups', icon: MailCheck },
  { title: 'Real-time analytics', icon: Activity },
  { title: 'Customer & quote history', icon: History },
  { title: 'Labour, material & margin control', icon: Wrench },
  { title: 'Equipment catalog uploads', icon: Upload },
]

export default function Features(){
  return (
    <section className="relative py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000A5A]">Everything you need to quote and win</h2>
          <p className="mt-3 text-gray-600">A powerful toolkit with thoughtful automation built-in.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i)=> (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
            >
              <TiltCard className="p-5 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D6EFD]/15 to-[#55B4E6]/25 flex items-center justify-center text-[#0D6EFD]">
                    <f.icon size={20} />
                  </div>
                  <div className="font-semibold text-[#000A5A]">{f.title}</div>
                </div>
                <div className="mt-4 h-14 rounded-xl bg-gradient-to-tr from-[#0D6EFD]/10 to-white/70" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
