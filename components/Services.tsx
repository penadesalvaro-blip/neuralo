'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = {
  es: [
    {
      number: '01',
      name:   'Adaptación Verifactu',
      desc:   'La ley obliga a todas las empresas a adaptarse antes de 2027. Te migramos al software certificado sin interrupciones.',
      badge:  '2027',
      href:   '#verifactu',
    },
    {
      number: '02',
      name:   'Landing Pages',
      desc:   'Una web que no convierte es dinero perdido. Diseñamos páginas optimizadas para transformar visitas en clientes.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '03',
      name:   'Gestión de Redes',
      desc:   'Mantener redes activas consume tiempo que no tienes. Creamos y publicamos contenido estratégico para que tu marca crezca sin esfuerzo.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '04',
      name:   'SEO',
      desc:   'Si no apareces en Google, no existes para tus clientes. Posicionamos tu web con estrategias que generan tráfico duradero.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '05',
      name:   'Excel Inteligente',
      desc:   'Las hojas genéricas no se adaptan a tu negocio. Automatizamos con macros VBA para eliminar horas de trabajo manual cada semana.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '06',
      name:   'Dashboard BI',
      desc:   'Sin datos claros, tomar decisiones es una apuesta. Visualiza tus métricas clave en tiempo real y actúa con información.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '07',
      name:   'Migración Google Workspace / M365',
      desc:   'Cambiar de herramientas sin perder datos ni productividad es complejo. Lo hacemos de forma ordenada, rápida y sin interrupciones.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '08',
      name:   'Agente de presupuestos con IA',
      desc:   'Gestionar solicitudes de presupuesto a mano ralentiza tu negocio. La IA analiza, prioriza y genera borradores automáticamente.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '09',
      name:   'Agente de atención post-venta',
      desc:   'Los clientes esperan respuesta inmediata sobre pedidos y devoluciones. Un agente IA responde en WhatsApp en tiempo real.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '10',
      name:   'Automatización de facturas',
      desc:   'Procesar facturas a mano es lento y propenso a errores. La IA detecta, extrae e introduce los datos en tu software automáticamente.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '11',
      name:   'Automatizaciones con n8n / Make',
      desc:   'Las tareas repetitivas entre apps consumen tiempo valioso. Conectamos tus herramientas para que tu negocio funcione solo.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '12',
      name:   'Chatbot WhatsApp con IA',
      desc:   'Atender consultas fuera del horario laboral cuesta clientes. Un chatbot inteligente atiende, informa y vende las 24 horas.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '13',
      name:   'Automatización de redes sociales con IA',
      desc:   'Crear contenido constantemente para redes es agotador. Un agente genera, programa y publica de forma autónoma con el tono de tu marca.',
      badge:  null,
      href:   '#contacto',
    },
  ],
  en: [
    {
      number: '01',
      name:   'Verifactu Compliance',
      desc:   'The law requires all businesses to comply before 2027. We migrate you to certified software without interruptions.',
      badge:  '2027',
      href:   '#verifactu',
    },
    {
      number: '02',
      name:   'Landing Pages',
      desc:   'A website that does not convert is money wasted. We design pages optimized to turn visits into clients.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '03',
      name:   'Social Media Management',
      desc:   'Keeping social media active takes time you do not have. We create and publish strategic content so your brand grows effortlessly.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '04',
      name:   'SEO',
      desc:   'If you do not appear on Google, you do not exist for your clients. We position your website with strategies that generate lasting traffic.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '05',
      name:   'Smart Excel',
      desc:   'Generic spreadsheets do not adapt to your business. We automate with VBA macros to eliminate hours of manual work every week.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '06',
      name:   'BI Dashboard',
      desc:   'Without clear data, making decisions is a gamble. Visualize your key metrics in real time and act on information.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '07',
      name:   'Google Workspace / M365 Migration',
      desc:   'Switching tools without losing data or productivity is complex. We do it in an orderly, fast and disruption-free way.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '08',
      name:   'AI Budget Management Agent',
      desc:   'Managing quote requests manually slows your business down. AI analyzes, prioritizes and generates drafts automatically.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '09',
      name:   'AI Post-Sale Support Agent',
      desc:   'Clients expect immediate answers about orders and returns. An AI agent responds on WhatsApp in real time.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '10',
      name:   'Invoice Automation',
      desc:   'Processing invoices manually is slow and error-prone. AI detects, extracts and enters data into your software automatically.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '11',
      name:   'Automations with n8n / Make',
      desc:   'Repetitive tasks between apps consume valuable time. We connect your tools so your business runs on its own.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '12',
      name:   'WhatsApp AI Chatbot',
      desc:   'Handling queries outside business hours costs you clients. An intelligent chatbot serves, informs and sells 24 hours a day.',
      badge:  null,
      href:   '#contacto',
    },
    {
      number: '13',
      name:   'AI Social Media Automation',
      desc:   'Creating content constantly for social media is exhausting. An agent generates, schedules and publishes autonomously with your brand voice.',
      badge:  null,
      href:   '#contacto',
    },
  ],
}

const copy = {
  es: {
    label:    'Servicios',
    title:    'Lo que hacemos.',
    subtitle: 'Soluciones a medida para cada necesidad de tu negocio.',
  },
  en: {
    label:    'Services',
    title:    'What we do.',
    subtitle: 'Tailored solutions for every business need.',
  },
}

type Service = (typeof services.es)[0]

interface ServicesProps {
  lang?: 'es' | 'en'
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={service.href}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
      className="group flex flex-col gap-5 p-7 no-underline cursor-pointer"
      style={{
        background:   '#FFFFFF',
        border:       '1px solid #D8DED5',
        borderRadius: '8px',
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
        borderColor: '#0A0A0A',
      }}
    >
      {/* Top row: number + badge */}
      <div className="flex items-center justify-between">
        <span
          className="font-dm text-ink/30 tabular-nums"
          style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em' }}
        >
          {service.number}
        </span>
        {service.badge && (
          <span
            className="font-dm text-white"
            style={{
              fontSize:      '0.62rem',
              fontWeight:    600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding:       '3px 8px',
              borderRadius:  '2px',
              background:    '#0A0A0A',
            }}
          >
            {service.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3
        className="font-playfair text-ink"
        style={{
          fontSize:      '1.15rem',
          fontWeight:    600,
          lineHeight:    1.25,
          letterSpacing: '-0.01em',
        }}
      >
        {service.name}
      </h3>

      {/* Description */}
      <p
        className="font-dm text-ink/50"
        style={{ fontSize: '0.85rem', lineHeight: 1.65, marginTop: 'auto' }}
      >
        {service.desc}
      </p>
    </motion.a>
  )
}

export default function Services({ lang = 'es' }: ServicesProps) {
  const t    = copy[lang]
  const list = services[lang]

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="servicios"
      style={{ background: '#E8EDE5', paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
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

          <motion.p
            className="font-dm text-ink/50 mt-4 mx-auto"
            style={{ fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '480px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
