import React from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../utils/blogUtils';
import './Blogs.css';

const BlogPostCard = ({ post }) => (
  <div className="blog-post-card">
    <h3 className="blog-post-title">{post.title}</h3>
    <p className="blog-post-date">{post.date}</p>
    <p className="blog-post-excerpt">{post.description}</p>
    <Link to={`/blogs/${post.slug}`} className="blog-post-link">
      Read more &rarr;
    </Link>
  </div>
);

export default function Blogs() {
  const posts = getPosts();

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Blog Posts</h2>
      <div className="blog-posts-list">
        {Array.isArray(posts) && posts.map(post => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
