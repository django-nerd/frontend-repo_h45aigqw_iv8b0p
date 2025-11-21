import React from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '$79',
    note: 'per month',
    features: [
      'Includes website widget',
      'Automation engine',
      'Analytics dashboard',
      'Up to 3 team members',
    ],
  },
  {
    name: 'Pro',
    featured: true,
    price: '$149',
    note: 'per month',
    features: [
      'Everything in Starter',
      'Advanced automations',
      'Custom equipment catalogs',
      'Unlimited team',
    ],
  },
  {
    name: 'Business',
    price: 'Contact',
    note: 'for pricing',
    features: [
      'Onboarding & migration',
      'Priority support',
      'SLAs & SSO options',
      'API access',
    ],
  },
]

export default function Pricing(){
  return (
    <section id="pricing" className="relative py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000A5A]">Simple pricing that scales with you</h2>
          <p className="mt-3 text-gray-600">Start with a demo and upgrade as your team grows.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p)=> (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border p-6 bg-white shadow-[0_20px_50px_-20px_rgba(13,110,253,0.2)] ${p.featured ? 'border-[#0D6EFD] ring-4 ring-[#0D6EFD]/10 scale-[1.02]' : 'border-blue-100'}`}
            >
              {p.featured && (
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#0D6EFD]/20 to-[#55B4E6]/20 blur-2xl -z-10" />
              )}
              <div className="text-[#000A5A] font-semibold">{p.name}</div>
              <div className="mt-2 text-4xl font-extrabold text-[#000A5A]">{p.price}</div>
              <div className="text-sm text-gray-500">{p.note}</div>
              <ul className="mt-6 space-y-2 text-sm text-[#000A5A]">
                {p.features.map((f)=> (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD]" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex items-center justify-center w-full rounded-xl px-4 py-2 font-semibold transition ${p.featured ? 'bg-[#0D6EFD] text-white hover:brightness-110' : 'bg-[#0D6EFD]/10 text-[#000A5A] hover:bg-[#0D6EFD]/20'}`}>Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
