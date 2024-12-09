import { defineArrayMember, defineField, defineType } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'Page d\'accueil',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    // Titre principal de la page
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre principal',
      validation: (Rule) => Rule.required().max(60).warning('Le titre ne doit pas dépasser 60 caractères.'),
    }),

    // Section Hero
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Section Hero',
      fields: [
        { name: 'title', type: 'string', title: 'Titre du Hero' },
        { name: 'text', type: 'text', title: 'Texte du Hero', rows: 4 },
        { 
          name: 'backgroundImage', 
          type: 'image', 
          title: 'Image de fond', 
          options: { hotspot: true },
        },
        {
          name: 'cta',
          type: 'array',
          title: 'Boutons CTA',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'ctaButton',
              fields: [
                { name: 'label', type: 'string', title: 'Texte du bouton' },
                { name: 'url', type: 'url', title: 'Lien' },
              ],
            }),
          ],
        },
        {
          name: 'stats',
          type: 'array',
          title: 'Statistiques',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'stat',
              fields: [
                { name: 'title', type: 'string', title: 'Titre' },
                { name: 'value', type: 'string', title: 'Valeur (ex: 100+)' },
              ],
            }),
          ],
        },
      ],
    }),

    // Section des abonnements
    defineField({
      name: 'subscriptions',
      type: 'array',
      title: 'Abonnements',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'subscription',
          fields: [
            { name: 'title', type: 'string', title: 'Nom de l\'abonnement' },
            { name: 'description', type: 'text', title: 'Description', rows: 3 },
            { name: 'price', type: 'string', title: 'Prix (ex: 9,99€/mois)' },
            {
              name: 'features',
              type: 'array',
              title: 'Caractéristiques',
              of: [{ type: 'string' }],
            },
            {
              name: 'cta',
              type: 'object',
              title: 'CTA',
              fields: [
                { name: 'label', type: 'string', title: 'Texte du bouton' },
                { name: 'url', type: 'string', title: 'Lien' },
              ],
            },
          ],
        }),
      ],
    }),

    // Section des fonctionnalités
    defineField({
      name: 'features',
      type: 'array',
      title: 'Fonctionnalités',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            { name: 'title', type: 'string', title: 'Titre de la fonctionnalité' },
            { name: 'text', type: 'text', title: 'Description', rows: 4 },
            { 
              name: 'icon', 
              type: 'image', 
              title: 'Icône ou image', 
              options: { hotspot: true }, 
            },
          ],
        }),
      ],
    }),

    // Section Testimonials (Témoignages)
    defineField({
      name: 'testimonials',
      type: 'array',
      title: 'Témoignages',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testimonial',
          fields: [
            { name: 'name', type: 'string', title: 'Nom du client' },
            { name: 'role', type: 'string', title: 'Poste ou rôle' },
            { name: 'feedback', type: 'text', title: 'Avis', rows: 3 },
            {
              name: 'photo',
              type: 'image',
              title: 'Photo',
              options: { hotspot: true },
            },
          ],
        }),
      ],
    }),

    // Section FAQ
    defineField({
      name: 'faq',
      type: 'array',
      title: 'FAQ',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Réponse', rows: 3 },
          ],
        }),
      ],
    }),
  ],
});
