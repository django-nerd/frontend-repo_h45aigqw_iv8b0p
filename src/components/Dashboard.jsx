import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Dashboard(){
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.2, 0.6], [80, -60])
  const scale = useTransform(scrollYProgress, [0.2, 0.6], [0.96, 1.04])

  return (
    <section className="relative py-28 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_20%_20%,rgba(13,110,253,0.08),transparent_60%),radial-gradient(600px_400px_at_80%_60%,rgba(0,10,90,0.08),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000A5A]">A dashboard that drives revenue</h2>
          <p className="mt-3 text-gray-600">Track pipeline, conversion and booked surveys with live analytics.</p>
        </div>
        <motion.div style={{ y, scale }} className="mt-14">
          <div className="mx-auto max-w-5xl rounded-2xl border border-blue-100 bg-white shadow-[0_30px_80px_-25px_rgba(13,110,253,0.25)] p-4">
            <div className="h-64 rounded-xl bg-gradient-to-tr from-[#55B4E6]/20 to-white" />
          </div>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { label: 'Pipeline value', value: '$842k' },
            { label: 'Conversion rate', value: '39%'},
            { label: 'Booked surveys', value: '127'},
          ].map((s, i)=> (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(13,110,253,0.2)]"
            >
              <div className="text-sm text-[#000A5A]/70">{s.label}</div>
              <div className="text-2xl font-extrabold text-[#000A5A] mt-1">{s.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
