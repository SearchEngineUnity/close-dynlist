import { MdImage } from 'react-icons/md';

export default {
  name: 'illustration',
  title: 'Illustration',
  type: 'object',
  icon: MdImage,
  fieldsets: [
    {
      name: 'caption',
      title: 'Caption',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
    },
    {
      name: 'caption',
      type: 'text',
      rows: 5,
      fieldset: 'caption',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
