import { MdStar } from 'react-icons/md';

export default {
  name: 'featured',
  title: 'Favoritos',
  type: 'document',
  icon: MdStar,
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
    },
    {
      name: 'blogs',
      title: 'Postagens Favoritas',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('A postagem já está salva nos favoritos').unique(),
        Rule.required().error('Pelo menos uma postagem é necessária'),
      ],
    },
    {
      name: 'category',
      title: 'Categorias Favoritas',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('A categoria já está salva nos favoritos').unique(),
        Rule.required().error('Pelo menos uma categoria é necessária'),
      ],
    },
  ],
};
