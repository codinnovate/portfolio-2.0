const { PROJECTS } = require('../lib/data.ts');

// This is a helper script to migrate existing data to Sanity
// You'll need to manually add the images to Sanity Studio first

console.log('Migration data for Sanity Studio:');
console.log('=====================================\n');

PROJECTS.forEach((project, index) => {
  console.log(`Project ${index + 1}: ${project.title}`);
  console.log('---');
  console.log(`Title: ${project.title}`);
  console.log(`Slug: ${project.slug}`);
  console.log(`Year: ${project.year}`);
  console.log(`Description: ${project.description.replace(/\n/g, ' ').substring(0, 100)}...`);
  console.log(`Role: ${project.role ? project.role.replace(/\n/g, ' ').substring(0, 100) + '...' : 'N/A'}`);
  console.log(`Tech Stack: ${project.techStack.join(', ')}`);
  console.log(`Live URL: ${project.liveUrl || 'N/A'}`);
  console.log(`Source Code: ${project.sourceCode || 'N/A'}`);
  console.log(`Order: ${index + 1}`);
  console.log(`Thumbnail: ${project.thumbnail}`);
  console.log(`Long Thumbnail: ${project.longThumbnail}`);
  console.log(`Images: ${project.images.join(', ')}`);
  console.log('\n');
});

console.log('Instructions:');
console.log('1. Go to your Sanity Studio at /studio');
console.log('2. Create new Project documents');
console.log('3. Upload the images first, then reference them in the project');
console.log('4. Copy the data above for each project');
console.log('5. Set the order field to control the display order'); 