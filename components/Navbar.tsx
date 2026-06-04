'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'

const navLinks = {
  es: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Verifactu', href: '#verifactu' },
    { label: 'Proceso',   href: '#proceso'   },
    { label: 'Contacto',  href: '#contacto'  },
  ],
  en: [
    { label: 'Services', href: '#servicios' },
    { label: 'Verifactu', href: '#verifactu' },
    { label: 'Process',  href: '#proceso'   },
    { label: 'Contact',  href: '#contacto'  },
  ],
}

interface NavbarProps {
  lang?: 'es' | 'en'
  onLangChange?: (lang: 'es' | 'en') => void
}

export default function Navbar({ lang = 'es', onLangChange }: NavbarProps) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 16))
  }, [scrollY])

  const links = navLinks[lang]

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? 'rgba(232,237,229,0.88)'
            : 'rgba(232,237,229,0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          borderBottomColor: scrolled
            ? 'rgba(216,222,213,0.8)'
            : 'rgba(216,222,213,0)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
      >
        <nav className="max-w-[1200px] mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span
              className="font-playfair text-ink"
              style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.01em' }}
            >
              Neuralo.
            </span>
          </Link>

          {/* Desktop links — center */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-dm text-ink/60 hover:text-ink transition-colors duration-200"
                  style={{ fontSize: '0.88rem', fontWeight: 500 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* ES / EN */}
            <button
              onClick={() => onLangChange?.(lang === 'es' ? 'en' : 'es')}
              className="hidden md:flex items-center gap-1 font-dm text-ink/40 hover:text-ink transition-colors duration-200"
              style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              <span className={lang === 'es' ? 'text-ink' : ''}>ES</span>
              <span className="text-ink/20">/</span>
              <span className={lang === 'en' ? 'text-ink' : ''}>EN</span>
            </button>

            {/* CTA */}
            <a
              href="#contacto"
              className="hidden md:inline-flex btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.84rem' }}
            >
              {lang === 'es' ? 'Solicitar presupuesto' : 'Get a quote'}
            </a>

            {/* Mobile burger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-ink"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-px bg-ink"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-ink"
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden md:hidden"
          style={{ background: 'rgba(232,237,229,0.96)', backdropFilter: 'blur(12px)' }}
        >
          <div className="px-6 py-6 flex flex-col gap-5 border-t border-sage-dark">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-dm text-ink"
                style={{ fontSize: '1.05rem', fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-sage-dark">
              <button
                onClick={() => onLangChange?.(lang === 'es' ? 'en' : 'es')}
                className="font-dm text-ink/50"
                style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                <span className={lang === 'es' ? 'text-ink font-semibold' : ''}>ES</span>
                {' / '}
                <span className={lang === 'en' ? 'text-ink font-semibold' : ''}>EN</span>
              </button>
              <a
                href="#contacto"
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.84rem' }}
                onClick={() => setMobileOpen(false)}
              >
                {lang === 'es' ? 'Presupuesto' : 'Get a quote'}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}
