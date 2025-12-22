import React from 'react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

const ExperienceTimeline: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      description: 'Led development of scalable web applications using MERN stack. Mentored junior developers and implemented CI/CD pipelines.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      id: 2,
      company: 'Digital Solutions LLC',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      description: 'Developed responsive web applications and RESTful APIs. Collaborated with UX designers to implement pixel-perfect interfaces.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Docker']
    },
    {
      id: 3,
      company: 'WebCraft Studios',
      position: 'Frontend Developer',
      duration: '2018 - 2020',
      description: 'Created interactive user interfaces with modern JavaScript frameworks. Optimized web performance and accessibility.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Webpack']
    }
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
          <p>My career journey and achievements</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-badge"></div>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;