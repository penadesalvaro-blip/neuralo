import { defineType, defineField } from 'sanity'

export const contactSchema = defineType({
  name: 'contactInfo',
  title: 'Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Teléfono / WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'Mensaje predeterminado WhatsApp',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes sociales',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'twitter', title: 'X / Twitter', type: 'url' },
      ],
    }),
  ],
})
