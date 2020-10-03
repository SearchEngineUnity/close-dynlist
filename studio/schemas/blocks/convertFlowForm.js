export default {
  name: 'cfForm',
  title: 'Convert Flow Form',
  type: 'object',
  fields: [
    {
      title: 'Form name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'className',
      name: 'className',
      type: 'string',
    },
    {
      title: 'website-id',
      name: 'websiteId',
      type: 'string',
    },
    {
      title: 'cta-id',
      name: 'ctaId',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
