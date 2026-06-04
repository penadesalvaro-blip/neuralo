'use client'

// Prevents static generation — studio must render on demand
export const dynamic = 'force-dynamic'

import NextDynamic from 'next/dynamic'
import config from '../../../sanity.config'

// ssr: false prevents Next.js from evaluating NextStudio during build
const NextStudio = NextDynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false, loading: () => null }
)

const isConfigured =
  Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

export default function StudioPage() {
  if (!isConfigured) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif', background: '#E8EDE5',
        gap: '16px', padding: '32px', textAlign: 'center',
      }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0A0A0A' }}>
          Sanity Studio no configurado
        </p>
        <p style={{ fontSize: '0.9rem', color: '#5A5A5A', maxWidth: '400px' }}>
          Añade <code style={{ background: '#D8DED5', padding: '2px 6px', borderRadius: '3px' }}>
            NEXT_PUBLIC_SANITY_PROJECT_ID
          </code> en las variables de entorno de Vercel.
        </p>
        <a href="/" style={{ fontSize: '0.85rem', color: '#0A0A0A' }}>← Volver al inicio</a>
      </div>
    )
  }

  return <NextStudio config={config} />
}
