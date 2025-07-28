import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-07-28', // Use today's date or your preferred version
  useCdn: false, // Set to false for fresh data
  token: process.env.SANITY_API_TOKEN, // Only needed if you want to update content or bypass the CDN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
}; 