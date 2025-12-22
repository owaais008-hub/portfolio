import React, { useState, useEffect } from 'react';
import { getSkills } from '../services/skillService';
import type { Skill } from '../services/skillService';
import SkillItem from '../components/SkillItem';
import LoadingSpinner from '../components/LoadingSpinner';
import SEO from '../components/SEO';

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch skills');
        setLoading(false);
        console.error('Error fetching skills:', err);
      }
    };

    fetchSkills();
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const elements = document.querySelectorAll('.skills-category');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  if (loading) {
    return (
      <>
        <SEO 
          title="My Skills - MERN Portfolio"
          description="Discover my technical skills and expertise in full-stack web development, including React, Node.js, MongoDB, Express, and more."
          keywords="skills, full-stack developer, MERN stack, React, Node.js, MongoDB, Express, JavaScript, TypeScript"
        />
        <div className="skills">
          <section className="section">
            <div className="container">
              <div className="section-title">
                <h1>My Skills</h1>
                <p>Technologies and tools I excel at</p>
              </div>
              <LoadingSpinner message="Loading skills..." size="large" />
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
          title="My Skills - MERN Portfolio"
          description="Discover my technical skills and expertise in full-stack web development, including React, Node.js, MongoDB, Express, and more."
          keywords="skills, full-stack developer, MERN stack, React, Node.js, MongoDB, Express, JavaScript, TypeScript"
        />
        <div className="skills">
          <section className="section">
            <div className="container">
              <div className="section-title">
                <h1>My Skills</h1>
                <p>Technologies and tools I excel at</p>
              </div>
              <div className="error-message">
                <h2>Error Loading Skills</h2>
                <p>{error}</p>
                <p>Please try again later.</p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <>
      <SEO 
        title="My Skills - MERN Portfolio"
        description="Discover my technical skills and expertise in full-stack web development, including React, Node.js, MongoDB, Express, and more."
        keywords="skills, full-stack developer, MERN stack, React, Node.js, MongoDB, Express, JavaScript, TypeScript"
      />
      <div className="skills">
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h1>My Skills</h1>
              <p>Technologies and tools I excel at</p>
            </div>
            {skills.length === 0 ? (
              <div className="empty-state">
                <h2>No Skills Available</h2>
                <p>Currently updating my skill set. Check back soon!</p>
              </div>
            ) : (
              <div className="skills-categories">
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                  <div key={category} className="skills-category fade-in">
                    <h2>{category}</h2>
                    <div className="skills-list">
                      {categorySkills.map(skill => (
                        <SkillItem key={skill.id} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;