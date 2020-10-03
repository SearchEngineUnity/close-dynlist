export default {
  name: 'dynListSegment',
  title: 'Dynamic List Segment',
  description: 'Renders a dynamic list segment of the list type selected below',
  type: 'object',
  fields: [
    {
      name: 'list',
      type: 'array',
      title: 'List(s)',
      description: 'Please pick at least one list type',
      of: [{ type: 'string' }],
      options: {
        list: [{ title: 'Quote', value: 'quote' }],
      },
    },
    // https://www.sanity.io/docs/schema-types/reference-type
    {
      title: 'Category Set',
      name: 'categorySet',
      type: 'reference',
      to: [{ type: 'categorySet' }],
    },
    // https://www.sanity.io/docs/schema-types/reference-type
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
  preview: {
    select: {
      list: 'list',
    },
    prepare({ list }) {
      return {
        title: `(${list}) dynamic list`,
      };
    },
  },
};
