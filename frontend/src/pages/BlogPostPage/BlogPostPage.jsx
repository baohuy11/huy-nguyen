import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchPosts, getPostBySlug } from '../../utils/blogUtils';
import './BlogPostPage.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]); // To get prev/next posts
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPostData = async () => {
      try {
        const allPosts = await fetchPosts();
        setPosts(allPosts); // Set all posts for navigation
        const currentPost = allPosts.find(p => p.slug === slug);
        setPost(currentPost);
      } catch (err) {
        setError('Failed to load blog post.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadPostData();
  }, [slug]); // Re-run when slug changes

  if (loading) {
    return <div className="blog-post-page">Loading blog post...</div>;
  }

  if (error) {
    return <div className="blog-post-page" style={{ color: 'red' }}>{error}</div>;
  }

  if (!post) {
    return <div className="blog-post-page">Post not found!</div>;
  }

  const postIndex = posts.findIndex(p => p.slug === slug);
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  const tags = Array.isArray(post.tag) ? post.tag : [post.tag].filter(Boolean);

  return (
    <div className="blog-post-page">
      <button onClick={() => navigate('/blogs')} className="back-button">
        &larr; Back to Blog Posts
      </button>
      <article className="blog-post-content">
        <header className="blog-post-header">
          <h1 className="blog-title">{post.title}</h1>
          <div className="blog-meta">
            <span>{post.date} - {post.lastUpdated}</span>
            <div className="blog-tags">
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          <p className="blog-description">{post.description}</p>
        </header>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      <nav className="post-navigation">
        {prevPost ? (
          <Link to={`/blogs/${prevPost.slug}`} className="prev-post">
            &larr; {prevPost.title}
          </Link>
        ) : <div />}
        {nextPost ? (
          <Link to={`/blogs/${nextPost.slug}`} className="next-post">
            {nextPost.title} &rarr;
          </Link>
        ) : <div />}
      </nav>
    </div>
  );
}