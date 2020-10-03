import { BsTag } from 'react-icons/bs';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BsTag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    // https://www.sanity.io/docs/schema-types/image-type
    // {
    //   name: 'parent',
    //   title: 'Parent',
    //   type: 'reference',
    //   to: [{ type: 'categorySet' }],
    // },
  ],
};
