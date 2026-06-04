import { defineType, defineField } from 'sanity'

export const servicesSchema = defineType({
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Número (01, 02...)',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descripción (2 frases)',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text', rows: 2 },
        { name: 'en', title: 'English', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'badge',
      title: 'Badge (ej: Obligatorio 2027)',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
