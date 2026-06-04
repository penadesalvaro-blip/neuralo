'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const links = {
  es: [
    { label: 'Servicios',            href: '#servicios' },
    { label: 'Verifactu',            href: '#verifactu' },
    { label: 'Proceso',              href: '#proceso'   },
    { label: 'Contacto',             href: '#contacto'  },
    { label: 'Aviso legal',          href: '/aviso-legal' },
    { label: 'Política de privacidad', href: '/privacidad' },
  ],
  en: [
    { label: 'Services',      href: '#servicios'  },
    { label: 'Verifactu',     href: '#verifactu'  },
    { label: 'Process',       href: '#proceso'    },
    { label: 'Contact',       href: '#contacto'   },
    { label: 'Legal notice',  href: '/aviso-legal' },
    { label: 'Privacy',       href: '/privacidad'  },
  ],
}

interface FooterProps {
  lang?: 'es' | 'en'
}

export default function Footer({ lang = 'es' }: FooterProps) {
  const navLinks = links[lang]
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#E8EDE5',
        borderTop: '1px solid #D8DED5',
        paddingTop: '64px',
        paddingBottom: '40px',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/">
              <span
                className="font-playfair text-ink"
                style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.01em' }}
              >
                Neuralo.
              </span>
            </Link>
            <p
              className="font-dm text-ink/40"
              style={{ fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '220px' }}
            >
              {lang === 'es'
                ? 'Soluciones digitales para empresas.'
                : 'Digital solutions for businesses.'}
            </p>
            <a
              href="mailto:hola@neuralo.es"
              className="font-dm text-ink/50 hover:text-ink transition-colors duration-200 w-fit"
              style={{ fontSize: '0.85rem' }}
            >
              hola@neuralo.es
            </a>
          </div>

          {/* Nav links — two columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-dm text-ink/40 hover:text-ink transition-colors duration-200 w-fit"
                style={{ fontSize: '0.85rem' }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid #D8DED5' }}
        >
          <p
            className="font-dm text-ink/25"
            style={{ fontSize: '0.78rem' }}
          >
            © {year} Neuralo. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          <p
            className="font-dm text-ink/20"
            style={{ fontSize: '0.78rem' }}
          >
            neuralo.es
          </p>
        </div>
      </div>
    </footer>
  )
}
