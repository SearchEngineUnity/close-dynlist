export default {
  name: 'lrSegment',
  title: 'Left Right Segment',
  description: 'Use composites when you want to put two different blocks side by side.',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'H2 title',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please pick a maximum of two. The first item will appear left in layout.',
      of: [{ type: 'hero' }, { type: 'illustration' }, { type: 'cfForm' }],
      validation: (Rule) => Rule.length(2),
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: ['7:5', '3:1', '2:1', '1:1', '1:2', '1:3'],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Untitled LR segment',
        media,
      };
    },
  },
};
