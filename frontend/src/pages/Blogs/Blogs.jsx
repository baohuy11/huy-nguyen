import React from 'react';

const blogPosts = [
  {
    title: 'The Rise of Large Language Models',
    date: 'October 26, 2023',
    excerpt: 'A deep dive into the architecture and impact of modern LLMs, exploring their capabilities and future potential.',
    link: '#',
  },
  {
    title: 'My Journey into Machine Translation',
    date: 'September 15, 2023',
    excerpt: 'Sharing my experiences and learnings from working on machine translation projects, from data preprocessing to model deployment.',
    link: '#',
  },
];

const BlogPostCard = ({ post }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{post.date}</p>
    <p className="text-gray-700 dark:text-gray-300 mt-4">{post.excerpt}</p>
    <a href={post.link} className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold mt-6 inline-block">Read more &rarr;</a>
  </div>
);

export default function Blogs() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Posts</h2>
      <div className="space-y-12">
        {blogPosts.map(post => (
          <BlogPostCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}