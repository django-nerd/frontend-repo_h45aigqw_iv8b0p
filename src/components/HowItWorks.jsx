import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

const steps = [
  {
    title: 'Capture the lead',
    desc: 'Embed the website widget on your site and collect room details in seconds.',
  },
  {
    title: 'Instant calculations',
    desc: 'We calculate cooling at 150 W/m² and suggest capacity instantly.',
  },
  {
    title: 'Smart equipment selection',
    desc: 'Split or multi-split from your catalog with pricing, margins and availability.',
  },
  {
    title: 'Send and automate',
    desc: 'Branded quotes, automatic follow-ups and full tracking in your dashboard.',
  },
]

export default function HowItWorks(){
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000A5A]">How it works</h2>
          <p className="mt-3 text-gray-600">From enquiry to booked survey in four fluid steps.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {steps.map((s, i)=> (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <TiltCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D6EFD]/20 to-[#55B4E6]/30" />
                  <div>
                    <div className="font-semibold text-[#000A5A]">{s.title}</div>
                    <div className="text-gray-600 mt-1 text-sm">{s.desc}</div>
                    <div className="mt-4 h-24 rounded-xl bg-gradient-to-tr from-[#0D6EFD]/10 to-[#55B4E6]/10" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
