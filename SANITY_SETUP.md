# Sanity.io Integration Setup Guide

## What's Been Implemented

✅ **Sanity Client Configuration** - `lib/sanity.ts`
✅ **Project Schema** - `schemas/project.ts`
✅ **Sanity Studio** - Accessible at `/studio`
✅ **API Routes** - `/api/projects` for fetching data
✅ **Image Handling** - Utilities for both Sanity and static images
✅ **Fallback System** - Graceful fallback to static data if Sanity is not configured
✅ **Type Safety** - Updated TypeScript interfaces for Sanity data
✅ **Migration Helper** - Script to help migrate existing data

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

## Setup Steps

### 1. Create a Sanity Project
- Go to [sanity.io](https://sanity.io) and create a new project
- Note down your project ID

### 2. Get API Token
- In your Sanity project dashboard, go to API settings
- Create a new token with read permissions (or read+write if you want to update content from your app)

### 3. Add Environment Variables
- Replace the placeholder values in `.env.local` with your actual Sanity project details

### 4. Access Sanity Studio
- Run your development server: `npm run dev`
- Visit `/studio` to access the Sanity Studio
- Add your projects through the studio interface

### 5. Migrate Existing Data
Run the migration helper to see your existing data:
```bash
npm run migrate
```

Then manually add your existing projects from the output to Sanity Studio.

## Project Schema

The project schema includes:
- **Title** - Project name
- **Slug** - Auto-generated from title for URLs
- **Year** - Project completion year
- **Description** - Project description (supports HTML)
- **Role** - Your role in the project (supports HTML)
- **Tech Stack** - Array of technologies used
- **Thumbnail** - Main project image
- **Long Thumbnail** - Optional longer thumbnail
- **Project Images** - Array of project screenshots
- **Live URL** - Link to live project
- **Source Code URL** - Link to source code
- **Order** - Display order (lower numbers first)

## API Endpoints

- `GET /api/projects` - Fetch all projects
- `GET /api/projects/[slug]` - Fetch single project (handled by page.tsx)

## Studio Access

Visit `/studio` in your browser to access the Sanity Studio for content management.

## Fallback System

The application includes a fallback system that:
- Tries to fetch data from Sanity first
- Falls back to static data from `lib/data.ts` if Sanity is not configured
- Handles both Sanity image objects and static image URLs
- Maintains full functionality even without Sanity setup

## Image Handling

The system automatically handles:
- Sanity image objects with optimization
- Static image URLs (for fallback)
- Responsive image sizing
- Image optimization and caching

## Development

### Running the Studio
```bash
npm run dev
# Then visit http://localhost:3000/studio
```

### Migration Helper
```bash
npm run migrate
# Shows existing data formatted for Sanity Studio
```

## Benefits of This Integration

1. **Content Management** - Easy to update projects without code changes
2. **Image Optimization** - Automatic image optimization and CDN delivery
3. **Real-time Updates** - Content updates are reflected immediately
4. **Type Safety** - Full TypeScript support for Sanity data
5. **Fallback Support** - Works even without Sanity configuration
6. **SEO Friendly** - Static generation with dynamic content
7. **Performance** - Optimized image delivery and caching

## Troubleshooting

### Images Not Loading
- Check that your Sanity project ID is correct
- Ensure images are uploaded to Sanity Studio
- Verify the image field references in your project documents

### Studio Not Accessible
- Make sure you're running the development server
- Check that the `/studio` route is working
- Verify your environment variables are set correctly

### Data Not Loading
- Check the browser console for errors
- Verify your API token has the correct permissions
- Ensure your dataset name matches your environment variable 