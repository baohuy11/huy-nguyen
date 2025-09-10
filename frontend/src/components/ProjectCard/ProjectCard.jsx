import React from 'react';
import '../BlogPostCard/BlogPostCard.css'; // Use BlogPostCard's CSS

const ProjectCard = ({ project, type }) => {
  const displayDescription = type === 'short' ? project.short_description : project.description;
  const tags = Array.isArray(project.tags) ? project.tags : [project.tags].filter(Boolean);

  return (
    <div className="blog-post-card">
      <h3 className="blog-post-title">{project.title}</h3>
      <p className="blog-post-date">{project.date}</p>
      <p className="blog-post-excerpt">{displayDescription}</p>
      <div className="blog-tags">
        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="blog-post-link">
        View Project &rarr;
      </a>
    </div>
  );
};

export default ProjectCard;