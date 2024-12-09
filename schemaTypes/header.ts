import { defineArrayMember, defineField, defineType } from 'sanity';

export const header = defineType({
  name: 'header',
  title: 'En-tête',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: { hotspot: true },
    }),

    defineField({
      name: 'navigation',
      type: 'array',
      title: 'Liens de navigation',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navItem',
          fields: [
            { name: 'label', type: 'string', title: 'Label', validation: (Rule) => Rule.required() },
            { name: 'url', type: 'string', title: 'Lien', validation: (Rule) => Rule.required() },
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).warning('Ajoutez au moins un lien.'),
    }),
  ],
});
