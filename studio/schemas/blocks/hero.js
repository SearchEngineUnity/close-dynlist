export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      title: 'H1 title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Quote Subtitle Text',
      type: 'simpleBlockContent',
    },
    {
      title: 'The "Created by" line',
      name: 'byline',
      type: 'string',
    },
    {
      title: 'Creator Name',
      name: 'name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
