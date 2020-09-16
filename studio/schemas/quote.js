export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    {
      name: 'airtableId',
      title: 'Airtable ID',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'text',
      title: 'Quote Text',
      type: 'text',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
    },
    {
      name: 'day',
      title: 'Day',
      type: 'string', 
      options: {
        list: ['M', 'T', 'W', 'Th', 'F', 'S', 'Sn'],
      },
    },
    {
      name: 'primary',
      title: 'Primary',
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
      name: 'secondary',
      title: 'Secondary',
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
      name: 'qualifying',
      title: 'Qualifying',
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
      name: 'shortLink',
      title: 'Short Link',
      type: 'url',
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'url',
    },
    {
      name: 'dropbox',
      title: 'Dropbox',
      type: 'url',
    },
  ],

  preview: {
    select: {
      title: 'text',
      subtitle: 'source',
    }
  }
}
