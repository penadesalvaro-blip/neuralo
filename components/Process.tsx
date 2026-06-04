'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = {
  es: [
    { number: '01', title: 'Reunión inicial',     desc: 'Hablamos 30 minutos. Entendemos qué necesita tu empresa y si encajamos.' },
    { number: '02', title: 'Propuesta a medida',  desc: 'En menos de 48h recibes alcance, plazos y precio. Sin letra pequeña.' },
    { number: '03', title: 'Desarrollo',           desc: 'Ejecutamos con actualizaciones semanales. Siempre sabes en qué punto estamos.' },
    { number: '04', title: 'Soporte continuo',    desc: 'Entregamos y no desaparecemos. Soporte incluido cuando más lo necesitas.' },
  ],
  en: [
    { number: '01', title: 'Initial meeting',     desc: 'We talk for 30 minutes. We understand your needs and whether we fit.' },
    { number: '02', title: 'Tailored proposal',   desc: 'Within 48h you get scope, timeline and price. No fine print.' },
    { number: '03', title: 'Development',          desc: 'We execute with weekly updates. You always know where we stand.' },
    { number: '04', title: 'Ongoing support',     desc: 'We deliver and we stay. Support included when you need it most.' },
  ],
}

const copy = {
  es: { label: 'Proceso', title: 'Cómo trabajamos.' },
  en: { label: 'Process', title: 'How we work.'     },
}

interface ProcessProps {
  lang?: 'es' | 'en'
}

export default function Process({ lang = 'es' }: ProcessProps) {
  const t = copy[lang]
  const list = steps[lang]

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const stepsRef = useRef(null)
  const stepsInView = useInView(stepsRef, { once: true, margin: '-40px' })

  return (
    <section
      id="proceso"
      style={{ background: '#E8EDE5', paddingTop: '96px', paddingBottom: '96px', borderTop: '1px solid #D8DED5' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.span
            className="section-label mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {t.label}
          </motion.span>

          <motion.h2
            className="font-playfair text-ink mt-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            {t.title}
          </motion.h2>
        </div>

        {/* Steps — 4 columnas */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: '#D8DED5' }}
        >
          {list.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col gap-5 p-8"
              style={{ background: '#E8EDE5' }}
            >
              <span
                className="font-dm text-ink/30"
                style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.10em' }}
              >
                {step.number}
              </span>

              <h3
                className="font-playfair text-ink"
                style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em' }}
              >
                {step.title}
              </h3>

              <p
                className="font-dm text-ink/50"
                style={{ fontSize: '0.88rem', lineHeight: 1.65 }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
