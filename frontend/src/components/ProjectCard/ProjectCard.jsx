import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, type }) => {
  const displayDescription = type === 'short' ? project.short_description : project.description;
  const tags = Array.isArray(project.tags) ? project.tags : [project.tags].filter(Boolean);

  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-date">{project.date}</p>
      <p className="project-description">{displayDescription}</p>
      <div className="project-tags">
        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project &rarr;
      </a>
    </div>
  );
};

export default ProjectCard;
