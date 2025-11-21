import React, { useRef } from 'react'
import { motion } from 'framer-motion'

// Lightweight hover-tilt card with glow
export default function TiltCard({ children, className = '', glow = true, as = 'div' }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateX = ((y - midY) / midY) * -6
    const rotateY = ((x - midX) / midX) * 6
    el.style.setProperty('--rx', `${rotateX}deg`)
    el.style.setProperty('--ry', `${rotateY}deg`)
    if (glow) {
      const px = Math.round((x / rect.width) * 100)
      const py = Math.round((y / rect.height) * 100)
      el.style.setProperty('--px', `${px}%`)
      el.style.setProperty('--py', `${py}%`)
    }
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', `0deg`)
    el.style.setProperty('--ry', `0deg`)
  }

  const Comp = motion[as] || motion.div

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: 'perspective(900px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))',
      }}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={`relative rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_15px_60px_-15px_rgba(13,110,253,0.25)] ${className}`}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              'radial-gradient(600px circle at var(--px, 50%) var(--py, 50%), rgba(13,110,253,0.18), transparent 40%)',
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </Comp>
  )
}
