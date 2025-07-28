export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'text',
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'longThumbnail',
      title: 'Long Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    },
    {
      name: 'sourceCode',
      title: 'Source Code URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which projects should appear (lower numbers first)',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      media: 'thumbnail',
    },
    prepare(selection: any) {
      const { title, year, media } = selection;
      return {
        title: title,
        subtitle: year,
        media: media,
      };
    },
  },
}; 