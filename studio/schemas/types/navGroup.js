export default {
  name: 'navGroup',
  type: 'object',
  title: 'Navigation Group',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'nav',
      title: 'Navigate to this page',
      type: 'reference',
      to: [{ type: 'dynlistPage' }],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Please enter a Font Awesome Icon class name',
    },
    {
      title: 'Group',
      name: 'group',
      type: 'array',
      of: [{ type: 'navItem' }],
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'nav.slug.current',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `/${subtitle}`,
      };
    },
  },
};
