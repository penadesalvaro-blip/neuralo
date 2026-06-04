import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Neuralo — Soluciones digitales para empresas',
  description:
    'Digitaliza tu empresa con Neuralo. Webs, automatización, Excel a medida, SEO y migración a Verifactu. Resultados reales.',
  metadataBase: new URL('https://neuralo.es'),
  openGraph: {
    title: 'Neuralo — Soluciones digitales para empresas',
    description:
      'Digitaliza tu empresa con Neuralo. Webs, automatización, Excel a medida, SEO y migración a Verifactu. Resultados reales.',
    url: 'https://neuralo.es',
    siteName: 'Neuralo',
    locale: 'es_ES',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://neuralo.es',
    languages: { es: 'https://neuralo.es', en: 'https://neuralo.es/en' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  )
}
