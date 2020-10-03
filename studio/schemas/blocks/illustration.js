import { MdImage } from 'react-icons/md';

export default {
  name: 'illustration',
  title: 'Illustration',
  type: 'image',
  icon: MdImage,
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
