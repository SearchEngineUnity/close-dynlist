import { ImQuotesRight } from 'react-icons/im';

export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon: ImQuotesRight,
  fields: [
    {
      name: 'text',
      title: 'Quote Text',
      type: 'text',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'url',
    },
    {
      name: 'primary',
      title: 'Primary',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'secondary',
      title: 'Secondary',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      name: 'qualifying',
      title: 'Qualifying',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'text',
      subtitle: 'source',
    },
  },
};
