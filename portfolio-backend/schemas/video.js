import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel des Videos',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung des Videos',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'URL des Videos',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Bild des Videos',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stacks',
      title: 'Stack',
      type: 'array',
      of: [{type: 'reference', to: {type: 'stack'}}],
    }),
  ],
})
