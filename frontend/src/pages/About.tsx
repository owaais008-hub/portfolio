import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Me - MERN Portfolio"
        description="Learn about my journey as a full-stack developer, my philosophy, approach, and core competencies in MERN stack development."
        keywords="about, full-stack developer, MERN stack, React, Node.js, MongoDB, Express, developer journey"
      />
      <div className="about">
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h1>About Me</h1>
              <p>Get to know me and my journey</p>
            </div>
            
            <div className="about-content">
              <p>
                Hello! I'm a passionate full-stack developer with extensive experience in building modern web applications 
                using cutting-edge technologies. I specialize in the MERN stack (MongoDB, Express, React, Node.js) 
                and enjoy creating efficient, scalable solutions that solve real-world problems.
              </p>
              
              <p>
                My journey in tech began several years ago when I discovered my passion for creating digital experiences. 
                Since then, I've worked on various projects ranging from small business websites to large-scale enterprise applications. 
                I'm committed to writing clean, maintainable code and staying up-to-date with the latest industry trends.
              </p>
              
              <div className="philosophy">
                <h2>My Philosophy</h2>
                <p>
                  I believe in creating technology that enhances human experiences. Every line of code I write 
                  is driven by the desire to solve problems and make a positive impact. I approach each project 
                  with curiosity, creativity, and a commitment to excellence.
                </p>
              </div>
              
              <div className="approach">
                <h2>My Approach</h2>
                <p>
                  I combine technical expertise with strategic thinking to deliver solutions that not only meet 
                  current requirements but are also adaptable to future needs. I focus on user-centered design, 
                  performance optimization, and robust architecture to ensure long-term success.
                </p>
              </div>
            </div>
            
            <div className="skills-overview">
              <h2>Core Competencies</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend Development</h3>
                  <ul>
                    <li>React & Next.js</li>
                    <li>TypeScript & JavaScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                    <li>UI/UX Principles</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Backend Development</h3>
                  <ul>
                    <li>Node.js & Express</li>
                    <li>MongoDB & SQL</li>
                    <li>RESTful APIs</li>
                    <li>Authentication & Security</li>
                    <li>Microservices</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Tools & Practices</h3>
                  <ul>
                    <li>Git & Version Control</li>
                    <li>Docker & Containerization</li>
                    <li>AWS & Cloud Services</li>
                    <li>CI/CD Pipelines</li>
                    <li>Testing & QA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;