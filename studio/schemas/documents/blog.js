import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'Postagem',
  name: 'blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Data de Publicação',
      name: 'publishedAt',
      type: 'datetime',
    },
    {
      title: 'Categorias',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Autor',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      title: 'Banner',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Resumo da Postagem',
      name: 'excerpt',
      type: 'normalText',
      description: 'Uma breve descrição da postagem para ser exibida em listas.',
    },
    {
      title: 'Conteúdo da Postagem',
      name: 'body',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'HH:mm, dd/MM/yyy')
          : '',
      };
    },
  },
};
