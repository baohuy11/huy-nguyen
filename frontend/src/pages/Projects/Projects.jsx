import React from 'react';
import { projects } from '../../config/content'; // Import projects data
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Import shared ProjectCard
import './Projects.css';

export default function Projects() { // Renamed from Works
  return (
    <div className="projects-container"> {/* Changed class name for consistency */}
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid"> {/* New class for grid */}
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} type="full" />
        ))}
      </div>
    </div>
  );
}
