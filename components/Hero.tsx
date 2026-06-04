'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const copy = {
  es: {
    label:    'Soluciones digitales para empresas',
    title:    'Soluciones digitales\npara tu empresa.',
    subtitle: 'Automatizamos procesos, construimos presencia digital y preparamos tu negocio para el futuro.',
    cta1:     'Solicitar presupuesto',
    cta2:     'Ver servicios',
    imgAlt:   'Equipo de Neuralo trabajando en soluciones digitales para empresas',
  },
  en: {
    label:    'Digital solutions for businesses',
    title:    'Digital solutions\nfor your business.',
    subtitle: 'We automate processes, build digital presence and prepare your business for the future.',
    cta1:     'Get a quote',
    cta2:     'Our services',
    imgAlt:   'Neuralo team working on digital solutions for businesses',
  },
}

// Fade-up variant — 40px, 0.6s ease (design system)
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

interface HeroProps {
  lang?: 'es' | 'en'
}

export default function Hero({ lang = 'es' }: HeroProps) {
  const t = copy[lang]

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#E8EDE5', paddingTop: '160px', paddingBottom: '96px' }}
      aria-label="Hero"
    >
      {/* SVG clip-path definition for organic/shield shape */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="organic-hero" clipPathUnits="objectBoundingBox">
            <path d="
              M0.5,0.01
              C0.74,0.01 0.97,0.14 0.97,0.36
              C0.97,0.52 0.90,0.66 0.78,0.76
              C0.67,0.86 0.56,0.93 0.5,0.97
              C0.44,0.93 0.33,0.86 0.22,0.76
              C0.10,0.66 0.03,0.52 0.03,0.36
              C0.03,0.14 0.26,0.01 0.5,0.01 Z
            " />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* Label */}
        <motion.span
          className="section-label mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
        >
          {t.label}
        </motion.span>

        {/* H1 */}
        <motion.h1
          className="font-playfair text-ink whitespace-pre-line"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            lineHeight: 1.0,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            maxWidth: '760px',
          }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
        >
          {t.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-dm text-ink/60 mt-6 mb-10"
          style={{
            fontSize: '1.05rem',
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: '560px',
          }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.32}
        >
          {t.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.44}
        >
          <motion.a
            href="#contacto"
            className="btn-primary"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.cta1}
            <ArrowRight size={14} />
          </motion.a>
          <motion.a
            href="#servicios"
            className="btn-outline"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.cta2}
          </motion.a>
        </motion.div>

        {/* Hero image — organic clip-path */}
        <motion.div
          className="mt-16 md:mt-20 w-full flex justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.56}
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: '440px',
              maxWidth: '90vw',
              aspectRatio: '440 / 520',
              clipPath: 'url(#organic-hero)',
            }}
          >
            <Image
              src="/images/hero.jpg"
              alt={t.imgAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 90vw, 440px"
            />

            {/* Placeholder visible when image not loaded */}
            <div
              className="absolute inset-0 -z-10"
              style={{ background: '#D8DED5' }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
