import React from 'react';
import type { Project } from '../services/projectService';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card hover-lift scale-in">
      <div className="project-image">
        {project.featured && <span className="project-badge">Featured</span>}
        {project.title}
      </div>
      <div className="project-content">
        <h2>{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Live Demo <span className="btn-icon">↗</span>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              GitHub <span className="btn-icon">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;