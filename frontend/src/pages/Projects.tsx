import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/projectService';
import type { Project } from '../services/projectService';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';
import SEO from '../components/SEO';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <>
        <SEO 
          title="My Projects - MERN Portfolio"
          description="Explore my portfolio of web development projects built with the MERN stack, including React, Node.js, MongoDB, and Express."
          keywords="projects, portfolio, MERN stack, React, Node.js, MongoDB, Express, web development"
        />
        <div className="projects">
          <section className="section">
            <div className="container">
              <div className="section-title">
                <h1>My Projects</h1>
                <p>Browse my latest work and creations</p>
              </div>
              <LoadingSpinner message="Loading amazing projects..." size="large" />
            </div>
          </section>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SEO 
          title="My Projects - MERN Portfolio"
          description="Explore my portfolio of web development projects built with the MERN stack, including React, Node.js, MongoDB, and Express."
          keywords="projects, portfolio, MERN stack, React, Node.js, MongoDB, Express, web development"
        />
        <div className="projects">
          <section className="section">
            <div className="container">
              <div className="section-title">
                <h1>My Projects</h1>
                <p>Browse my latest work and creations</p>
              </div>
              <div className="error-message">
                <h2>Error Loading Projects</h2>
                <p>{error}</p>
                <p>Please try again later.</p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="My Projects - MERN Portfolio"
        description="Explore my portfolio of web development projects built with the MERN stack, including React, Node.js, MongoDB, and Express."
        keywords="projects, portfolio, MERN stack, React, Node.js, MongoDB, Express, web development"
      />
      <div className="projects">
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h1>My Projects</h1>
              <p>Browse my latest work and creations</p>
            </div>
            {projects.length === 0 ? (
              <div className="empty-state">
                <h2>No Projects Available</h2>
                <p>Currently working on exciting new projects. Check back soon!</p>
              </div>
            ) : (
              <div className="projects-grid staggered-fade-in">
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;