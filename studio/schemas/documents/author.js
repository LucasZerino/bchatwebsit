import { MdPerson } from 'react-icons/md';

export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'profileImage',
      title: 'Imagem de Perfil',
      type: 'customImage',
    },
    {
      name: 'bio',
      title: 'Biografia',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
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
