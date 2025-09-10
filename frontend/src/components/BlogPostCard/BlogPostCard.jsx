import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPostCard.css'; // I will create this CSS file

const BlogPostCard = ({ post }) => {
  console.log('Post object in BlogPostCard:', post); // Add this line
  const tags = Array.isArray(post.tag) ? post.tag : [post.tag].filter(Boolean);

  return (
    <div className="blog-post-card">
      <h3 className="blog-post-title">{post.title}</h3>
      <p className="blog-post-date">{post.date}</p>
      <p className="blog-post-excerpt">{post.description}</p>
      <div className="blog-tags">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <Link to={`/blogs/${post.slug}`} className="blog-post-link">
        Read more &rarr;
      </Link>
    </div>
  );
};

export default BlogPostCard;
