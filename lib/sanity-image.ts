import { urlFor } from './sanity';

export const getSanityImageUrl = (image: any, width?: number, height?: number) => {
  if (!image) return '';
  
  let imageUrl = urlFor(image);
  
  if (width && height) {
    imageUrl = imageUrl.width(width).height(height);
  } else if (width) {
    imageUrl = imageUrl.width(width);
  } else if (height) {
    imageUrl = imageUrl.height(height);
  }
  
  return imageUrl.url();
};

export const getSanityImageUrlOptimized = (image: any, options?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}) => {
  if (!image) return '';
  
  let imageUrl = urlFor(image);
  
  if (options?.width) {
    imageUrl = imageUrl.width(options.width);
  }
  
  if (options?.height) {
    imageUrl = imageUrl.height(options.height);
  }
  
  if (options?.quality) {
    imageUrl = imageUrl.quality(options.quality);
  }
  
  if (options?.format) {
    imageUrl = imageUrl.format(options.format);
  }
  
  return imageUrl.url();
}; 