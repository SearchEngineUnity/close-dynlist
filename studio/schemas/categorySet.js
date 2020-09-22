export default {
  name: 'categorySet',
  title: 'Category Set',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'set',
      title: 'Set',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
  ],
};
