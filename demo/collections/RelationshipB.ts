import { PayloadCollectionConfig } from '../../src/collections/config/types';

const RelationshipB: PayloadCollectionConfig = {
  slug: 'relationship-b',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Relationship B',
    plural: 'Relationship B',
  },
  fields: [
    {
      name: 'post',
      label: 'Post',
      type: 'relationship',
      relationTo: 'relationship-a',
      localized: false,
      hasMany: true,
    },
    {
      name: 'postManyRelationships',
      label: 'Post Many Relationships',
      type: 'relationship',
      relationTo: ['relationship-a', 'media'],
      localized: true,
      hasMany: false,
    },
    {
      name: 'localizedPosts',
      label: 'Localized Posts',
      type: 'relationship',
      hasMany: true,
      relationTo: 'localized-posts',
    },
  ],
  timestamps: true,
};

export default RelationshipB;
