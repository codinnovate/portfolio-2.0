import { getSanityImageUrl } from './sanity-image';
import { SanityImage } from '@/types';

export const getImageUrl = (image: SanityImage | string, width?: number, height?: number): string => {
  // If it's a string (static data), return as is
  if (typeof image === 'string') {
    return image;
  }
  
  // If it's a Sanity image object, use the Sanity image URL builder
  if (image && typeof image === 'object' && image._type === 'image') {
    return getSanityImageUrl(image, width, height);
  }
  
  // Fallback
  return '';
};

export const getImageKey = (image: SanityImage | string): string => {
  if (typeof image === 'string') {
    return image;
  }
  
  if (image && typeof image === 'object' && image._type === 'image') {
    return image._key || image.asset?._ref || '';
  }
  
  return '';
}; 