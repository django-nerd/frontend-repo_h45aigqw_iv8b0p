import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#000A5A]">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <section id="problem"><Problem /></section>
        <section id="how"><HowItWorks /></section>
        <section id="features"><Features /></section>
        <Dashboard />
        <Benefits />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-[#000A5A]/60 bg-gray-50">© {new Date().getFullYear()} Quotestack. All rights reserved.</footer>
    </div>
  )
}

export default App
