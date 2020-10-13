export default {
  name: 'dynListSegment',
  title: 'Dynamic List Segment',
  description: 'Renders a dynamic list segment of the list type selected below',
  type: 'object',
  fields: [
    // https://www.sanity.io/docs/schema-types/reference-type
    {
      title: 'Desktop Menu',
      name: 'desktopMenu',
      type: 'reference',
      to: [{ type: 'navMenu' }],
    },
    {
      title: 'Mobile Menu',
      name: 'mobileMenu',
      type: 'reference',
      to: [{ type: 'navMenu' }],
    },
    {
      title: 'Breadcrumb',
      name: 'breadcrumb',
      type: 'array',
      description: 'Please always include current location as well',
      of: [
        {
          type: 'navItem',
        },
      ],
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
