import React from 'react';

const blogPosts = [
  {
    title: 'The Triad of Innovations in Manga Accessibility',
    date: 'August 23, 2025',
    excerpt: 'A multi-stage research effort addressing accessibility barriers for visually impaired individuals in comics, culminating in a comprehensive system for generating immersive literary narratives from manga.',
    link: '/blogs/magi',
  },
];

const BlogPostCard = ({ post, setCurrentPage, setCurrentBlogId }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
    <p className="text-base text-gray-500 dark:text-gray-400 mt-2">{post.date}</p>
    <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">{post.excerpt}</p>
    {post.link.startsWith('/blogs/') ? (
      <a
        onClick={() => {
          setCurrentPage('blogs');
          setCurrentBlogId(post.link.split('/').pop());
        }}
        className="cursor-pointer text-lg text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold mt-6 inline-block"
      >
        Read more &rarr;
      </a>
    ) : (
      <a href={post.link} className="text-lg text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold mt-6 inline-block">
        Read more &rarr;
      </a>
    )}
  </div>
);

export default function Blogs({ setCurrentPage, setCurrentBlogId }) {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Blog Posts</h2>
      <div className="space-y-12">
        {blogPosts.map(post => (
          <BlogPostCard key={post.title} post={post} setCurrentPage={setCurrentPage} setCurrentBlogId={setCurrentBlogId} />
        ))}
      </div>
    </div>
  );
}
