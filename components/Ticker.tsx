'use client'

import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'

const items = {
  es: [
    'Adaptación Verifactu',
    'Landing Pages',
    'Gestión de Redes',
    'SEO',
    'Excel Inteligente',
    'Dashboard BI',
    'Google Workspace',
    'Agentes con IA',
    'Automatizaciones n8n',
    'Chatbot WhatsApp',
    'Redes Sociales con IA',
  ],
  en: [
    'Verifactu Compliance',
    'Landing Pages',
    'Social Media',
    'SEO',
    'Smart Excel',
    'BI Dashboard',
    'Google Workspace',
    'AI Agents',
    'n8n Automations',
    'WhatsApp Chatbot',
    'AI Social Media',
  ],
}

function TickerTrack({ items, speed = 32 }: { items: string[]; speed?: number }) {
  const x = useMotionValue(0)
  const ref = useRef<HTMLDivElement>(null)

  useAnimationFrame((_, delta) => {
    const trackWidth = ref.current?.scrollWidth ?? 0
    const half = trackWidth / 2
    let next = x.get() - (speed * delta) / 1000
    if (Math.abs(next) >= half) next = 0
    x.set(next)
  })

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <motion.div
        ref={ref}
        style={{ x }}
        className="flex items-center whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="font-dm text-ink/70 px-7"
              style={{ fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.04em' }}
            >
              {item}
            </span>
            {/* Em dash separator */}
            <span
              className="text-ink/30 shrink-0"
              style={{ fontSize: '0.7rem' }}
            >
              —
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

interface TickerProps {
  lang?: 'es' | 'en'
}

export default function Ticker({ lang = 'es' }: TickerProps) {
  const list = items[lang]

  return (
    <section
      style={{
        background: '#D8DED5',
        borderTop:    '1px solid #C8CEC5',
        borderBottom: '1px solid #C8CEC5',
        paddingTop: '14px',
        paddingBottom: '14px',
      }}
    >
      <TickerTrack items={list} speed={30} />
    </section>
  )
}
