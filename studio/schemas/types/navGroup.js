export default {
  name: 'navGroup',
  type: 'object',
  title: 'Navigation Group',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'reference',
      to: [{ type: 'categorySet' }],
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'dynlistPage' }],
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
      title: 'label.name',
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
