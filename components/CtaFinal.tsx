'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const copy = {
  es: {
    label:    'Contacto',
    title:    'Hablemos.',
    subtitle: 'Cuéntanos qué necesitas. Respondemos en menos de 24 horas.',
    cta:      'Solicitar presupuesto',
    whatsapp: 'Hola, me gustaría información sobre vuestros servicios.',
  },
  en: {
    label:    'Contact',
    title:    'Let\'s talk.',
    subtitle: 'Tell us what you need. We reply within 24 hours.',
    cta:      'Get a quote',
    whatsapp: 'Hello, I would like information about your services.',
  },
}

const WHATSAPP = '34600000000'

interface CtaFinalProps {
  lang?: 'es' | 'en'
}

export default function CtaFinal({ lang = 'es' }: CtaFinalProps) {
  const t = copy[lang]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.whatsapp)}`

  return (
    <section
      id="contacto"
      ref={ref}
      style={{ background: '#0A0A0A', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        <motion.span
          className="font-dm text-white/30 mb-6"
          style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.10em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {t.label}
        </motion.span>

        <motion.h2
          className="font-playfair text-white"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.0 }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          {t.title}
        </motion.h2>

        <motion.p
          className="font-dm text-white/40 mt-6 mb-10"
          style={{ fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '480px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
        >
          {t.subtitle}
        </motion.p>

        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-dm font-medium text-ink bg-white cursor-pointer"
          style={{ padding: '16px 36px', borderRadius: '4px', fontSize: '0.95rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.32, ease: 'easeOut' }}
          whileHover={{ y: -1, backgroundColor: '#F5F5F5' }}
          whileTap={{ scale: 0.98 }}
        >
          {t.cta}
        </motion.a>
      </div>
    </section>
  )
}
