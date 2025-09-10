import { parse } from 'yaml';

const postFiles = [
  'M04W01.md',
  'M04W02.md',
  'M04W03.md',
  'M04W04.md'
];

let cachedPosts = null;

// New function to parse metadata from lines 1-14
const parseMetadata = (rawText) => {
  const lines = rawText.split('\n');
  const metadata = {};

  // Iterate through lines 0 to 13 (inclusive)
  for (let i = 0; i < 14 && i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.includes(':')) {
      const [key, value] = line.split(':', 2); // Split only on the first colon
      const trimmedKey = key.trim();
      let trimmedValue = value.trim();

      // Special handling for 'tag' which is an array
      if (trimmedKey === 'tag') {
        // Remove brackets and split by comma
        trimmedValue = trimmedValue.replace(/\s*\[|]\s*/g, '').split(',').map(s => s.trim());
      }

      metadata[trimmedKey] = trimmedValue;
    }
  }
  console.log('Parsed Metadata:', metadata);
  return metadata;
};

export const fetchPosts = async () => {
  if (cachedPosts) {
    return cachedPosts;
  }

  const postsPromises = postFiles.map(async (filename) => {
    const response = await fetch(`/posts/${filename}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} for ${filename}`);
    }
    
    const rawContent = await response.text();
    const cleanedContent = rawContent.split('\0')[0]; // Remove content after first null character

    // Extract content from line 20 onwards
    const contentLines = cleanedContent.split('\n');
    const content = contentLines.slice(19).join('\n'); // Line 20 is index 19

    // Parse metadata from lines 1-14
    const data = parseMetadata(cleanedContent);
    
    const slug = filename.replace('.md', '').toLowerCase();

    return {
      ...data,
      slug,
      content,
    };
  });

  const posts = await Promise.all(postsPromises);

  // Sort posts by the 'order' property in the frontmatter
  const sortedPosts = posts.sort((a, b) => (a.order || 0) - (b.order || 0));
  
  cachedPosts = sortedPosts;
  return sortedPosts;
};

export const getPostBySlug = async (slug) => {
  const posts = await fetchPosts();
  return posts.find(post => post.slug === slug);
};
