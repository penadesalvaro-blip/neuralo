'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Clock } from 'lucide-react'

const copy = {
  es: {
    label:    'Verifactu',
    title:    'Verifactu.\nObligatorio en 2027.',
    subtitle: 'Todas las empresas y autónomos deben adaptarse. Te lo ponemos fácil.',
    body:     'Migramos tu sistema de facturación al software certificado por la Agencia Tributaria. Sin interrupciones, sin complicaciones. Tú sigues con tu negocio.',
    cta:      'Migrar a Verifactu',
    timelineTitle: 'Calendario obligatorio',
    timeline: [
      { date: 'Julio 2025',  label: 'Ya en vigor',               detail: 'Los proveedores de software ya deben cumplir los requisitos técnicos de Verifactu.',                               done: true  },
      { date: 'Enero 2027',  label: 'Sociedades y empresas',      detail: 'Obligatorio para todas las sociedades limitadas, anónimas y entidades con Impuesto de Sociedades.',               done: false },
      { date: 'Julio 2027',  label: 'Autónomos y resto',          detail: 'Plazo final para autónomos y personas físicas. Multas de hasta 50.000€ por incumplimiento.',                       done: false },
    ],
  },
  en: {
    label:    'Verifactu',
    title:    'Verifactu.\nRequired in 2027.',
    subtitle: 'All businesses and freelancers must comply. We make it easy.',
    body:     'We migrate your invoicing system to Tax Agency-certified software. No interruptions, no complications. You keep running your business.',
    cta:      'Migrate to Verifactu',
    timelineTitle: 'Compliance calendar',
    timeline: [
      { date: 'July 2025',    label: 'Already in force',          detail: 'Software providers must already meet the technical requirements of Verifactu.',                                    done: true  },
      { date: 'January 2027', label: 'Companies & corporations',  detail: 'Mandatory for all limited companies, corporations and entities subject to Corporate Income Tax.',                  done: false },
      { date: 'July 2027',    label: 'Freelancers & individuals', detail: 'Final deadline for freelancers and individuals. Fines of up to €50,000 for non-compliance.',                       done: false },
    ],
  },
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

interface VerifactuProps {
  lang?: 'es' | 'en'
}

export default function Verifactu({ lang = 'es' }: VerifactuProps) {
  const t = copy[lang]

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="verifactu"
      ref={ref}
      style={{ background: '#FFFFFF', paddingTop: '96px', paddingBottom: '96px', borderTop: '1px solid #D8DED5' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div>
            <motion.span
              className="section-label mb-5 text-left"
              style={{ textAlign: 'left' }}
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {t.label}
            </motion.span>

            <motion.h2
              className="font-playfair text-ink mt-5 whitespace-pre-line"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {t.title}
            </motion.h2>

            <motion.p
              className="font-dm text-ink/50 mt-5 mb-4"
              style={{ fontSize: '1.05rem', lineHeight: 1.7 }}
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {t.subtitle}
            </motion.p>

            <motion.p
              className="font-dm text-ink/40 mb-10"
              style={{ fontSize: '0.92rem', lineHeight: 1.7 }}
              variants={fadeUp(0.28)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {t.body}
            </motion.p>

            <motion.a
              href="#contacto"
              className="btn-primary inline-flex"
              variants={fadeUp(0.36)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.cta}
            </motion.a>
          </div>

          {/* Right — timeline */}
          <div>
            <motion.p
              className="font-dm text-ink/30 mb-8"
              style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.10em' }}
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {t.timelineTitle}
            </motion.p>

            <div className="flex flex-col">
              {t.timeline.map((item, i) => (
                <motion.div
                  key={item.date}
                  variants={fadeUp(0.2 + i * 0.12)}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  className="flex gap-5 pb-8 last:pb-0"
                >
                  {/* Icon */}
                  <div
                    className="shrink-0 flex items-center justify-center rounded-full mt-0.5"
                    style={{
                      width: 32,
                      height: 32,
                      background: item.done ? '#0A0A0A' : '#E8EDE5',
                      border: item.done ? 'none' : '1px solid #C8CEC5',
                      color: item.done ? '#FFFFFF' : '#0A0A0A',
                    }}
                  >
                    {item.done
                      ? <Check size={14} strokeWidth={2.5} />
                      : <Clock size={13} strokeWidth={2} />
                    }
                  </div>

                  {/* Content */}
                  <div className="flex-1 border-b pb-8 last:border-0 last:pb-0" style={{ borderColor: '#E8EDE5' }}>
                    <span
                      className="font-dm text-ink/40 block mb-1"
                      style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}
                    >
                      {item.date}
                    </span>
                    <p
                      className="font-playfair text-ink mb-1"
                      style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.2 }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-dm text-ink/40"
                      style={{ fontSize: '0.85rem', lineHeight: 1.55 }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
