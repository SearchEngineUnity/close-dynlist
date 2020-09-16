export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'airtableId',
      title: 'Air Table ID',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'name',
      title: 'Full Name',
      type: 'string'      
    },
    {
      name: 'parent',
      title: 'Parent',
      type: 'string'
    },
  ],
}
