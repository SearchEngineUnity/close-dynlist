export default {
  name: 'navItem',
  type: 'object',
  title: 'Navigation Item',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'dynlistPage' }],
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
