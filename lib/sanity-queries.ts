import { client } from './sanity';
import { IProject } from '@/types';

// Query to get all projects
export const getAllProjects = async (): Promise<IProject[]> => {
  const query = `
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      year,
      description,
      role,
      techStack,
      thumbnail,
      longThumbnail,
      images,
      liveUrl,
      sourceCode
    }
  `;

  const projects = await client.fetch(query);
  return projects;
};

// Query to get a single project by slug
export const getProjectBySlug = async (slug: string): Promise<IProject | null> => {
  const query = `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      year,
      description,
      role,
      techStack,
      thumbnail,
      longThumbnail,
      images,
      liveUrl,
      sourceCode
    }
  `;

  const project = await client.fetch(query, { slug });
  return project;
};

// Query to get all project slugs for static generation
export const getAllProjectSlugs = async (): Promise<{ slug: string }[]> => {
  const query = `
    *[_type == "project"] {
      "slug": slug.current
    }
  `;

  const slugs = await client.fetch(query);
  return slugs;
}; 