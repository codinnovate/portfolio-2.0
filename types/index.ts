export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

// Sanity image type
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  _key?: string;
}

// For static data (fallback)
export interface StaticProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}

// For Sanity data
export interface SanityProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: SanityImage;
    longThumbnail?: SanityImage;
    images: SanityImage[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}

export type IProject = SanityProject | StaticProject;
