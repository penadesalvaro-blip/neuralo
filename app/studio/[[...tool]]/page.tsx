'use client'

import NextDynamic from 'next/dynamic'
import config from '../../../sanity.config'

const Studio = NextDynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <Studio config={config} />
}
