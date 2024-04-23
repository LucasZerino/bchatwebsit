import { MdCategory } from 'react-icons/md';

export default {
  name: 'category',
  title: 'Categorias',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'customImage',
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};
