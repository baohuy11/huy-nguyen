/*
import matter from 'gray-matter';

// Use Vite's import.meta.glob to get all Markdown files
const modules = import.meta.glob('/src/posts/*.md', { as: 'raw', eager: true });

const posts = Object.entries(modules).map(([path, rawContent]) => {
  const { data, content } = matter(rawContent);
  
  // Create a slug from the filename (e.g., /src/pages/BlogPostPage/M04W01.md -> m04w01)
  const slug = path.split('/').pop().replace('.md', '').toLowerCase();

  return {
    ...data,
    slug,
    content,
  };
});

// Sort posts by the 'order' property in the frontmatter
const sortedPosts = posts.sort((a, b) => a.order - b.order);
*/

export const getPosts = () => {
  return [];
};

export const getPostBySlug = (slug) => {
  return null;
};