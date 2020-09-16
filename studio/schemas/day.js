export default {
  name: 'day',
  title: 'Day',
  type: 'object',
  fields: [
    {
      name: 'selectorId',
      title: 'Airtable Selector Id',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: ['M', 'T', 'W', 'Th', 'F', 'S', 'Sn'],
      },
    },
  ],
}
