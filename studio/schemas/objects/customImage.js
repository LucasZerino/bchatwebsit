import { MdImage } from 'react-icons/md';

export default {
  name: 'customImage',
  title: 'Imagem',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Descrição da Imagem',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error("O texto de descrição é necessário").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      alt: 'alt',
    },
  },
};
