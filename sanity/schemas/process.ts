import { defineType, defineField } from 'sanity'

export const processSchema = defineType({
  name: 'processStep',
  title: 'Paso del proceso',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Número',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text', rows: 2 },
        { name: 'en', title: 'English', type: 'text', rows: 2 },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Número',
      name: 'numberAsc',
      by: [{ field: 'number', direction: 'asc' }],
    },
  ],
})
