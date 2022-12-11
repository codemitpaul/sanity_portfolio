import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel des Projekts',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL des Projekts',
      type: 'url',
    }),
    defineField({
      name: 'difficulty',
      title: 'Schwierigkeit des Projekts',
      type: 'number',
      initialValue: 1,
      options: {
        min: 1,
        max: 5,
        step: 1,
      },
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
