import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Paper Implementations',
    description: 'I have created a repository consisting of my implementations of AI/ML paper(s) from domains ranging from ML to LLMs, showcasing my eagerness to learn and explore the diverse fields to much deeper extent, whilst demonstrating my abilities to replicate the papers from scratch.',
    link: 'https://github.com/baohuy11/paper-implementations',
    tags: ['Python', 'PyTorch'],
    date: 'August 23, 2025',
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3 className="project-card-title">{project.title}</h3>
    <p className="project-card-date">{project.date}</p>
    <p className="project-card-description">{project.description}</p>
    <div className="project-card-tags">
      {project.tags.map(tag => (
        <span key={tag} className="project-tag">{tag}</span>
      ))}
    </div>
    <a href={project.link} className="project-card-link">View Project &rarr;</a>
  </div>
);

export default function Works() {
  return (
    <div className="works-container">
      <h2 className="works-title">My Projects</h2>
      <div className="projects-posts-list">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}