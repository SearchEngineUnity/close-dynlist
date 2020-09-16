export default {
  name: 'lrTextImage',
  title: 'LR Text Image',
  type: 'document',
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Default text on left. Set true if image on left',
      type: 'boolean',
    },
    {
      name: 'textDesign',
      title: 'Text Design',
      type: 'string',
      options: {
        list: [{ title: 'SEU LP', value: '1' }],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'set',
      title: 'Set',
      type: 'array',
      of: [{ type: 'textImageSet' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
    prepare({ title, subtitle }) {
      return {
        title: `LR Segment: ${title}`,
        subtitle,
      };
    },
  },
};
