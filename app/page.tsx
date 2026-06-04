'use client'

import { useState } from 'react'
import Navbar    from '@/components/Navbar'
import Hero      from '@/components/Hero'
import Ticker    from '@/components/Ticker'
import Services  from '@/components/Services'
import Verifactu from '@/components/Verifactu'
import Process   from '@/components/Process'
import CtaFinal  from '@/components/CtaFinal'
import Footer    from '@/components/Footer'

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es')

  return (
    <main>
      <Navbar    lang={lang} onLangChange={setLang} />
      <Hero      lang={lang} />
      <Ticker    lang={lang} />
      <Services  lang={lang} />
      <Verifactu lang={lang} />
      <Process   lang={lang} />
      <CtaFinal  lang={lang} />
      <Footer    lang={lang} />
    </main>
  )
}
