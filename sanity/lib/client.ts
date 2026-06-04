import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET    || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn:     process.env.NODE_ENV === 'production',
})

export const isSanityConfigured =
  projectId !== 'placeholder' && projectId.length > 0
