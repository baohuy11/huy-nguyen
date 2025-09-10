import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../utils/blogUtils';
import './Blogs.css';

import BlogPostCard from '../../components/BlogPostCard/BlogPostCard';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to load blog posts.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) {
    return <div className="blogs-container">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="blogs-container" style={{ color: 'red' }}>{error}</div>;
  }

  if (posts.length === 0) {
    return <div className="blogs-container">No blog posts found.</div>;
  }

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Blog Posts</h2>
      <div className="blog-posts-list">
        {posts.map(post => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}