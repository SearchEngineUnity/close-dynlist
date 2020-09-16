export default {
  name: 'ref',
  title: 'Reference',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'reference',
      to: [{type: 'quote'}]
    },
  ],
}
