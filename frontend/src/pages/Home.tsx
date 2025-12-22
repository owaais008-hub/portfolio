import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const features = [
    {
      icon: '🎨',
      title: 'Frontend Development',
      description: 'Creating stunning, responsive user interfaces with React, Vue, and modern JavaScript frameworks. Focused on performance, accessibility, and exceptional user experiences with pixel-perfect implementations.'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Building robust, scalable server-side applications and RESTful APIs using Node.js, Express, Python, and cloud technologies. Emphasizing security, performance, and maintainability with clean architecture.'
    },
    {
      icon: '🌐',
      title: 'Full Stack Solutions',
      description: 'Delivering end-to-end web applications from concept to deployment. Expertise in database design, DevOps, CI/CD pipelines, and cloud infrastructure with a focus on scalability and reliability.'
    }
  ];

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
    
    const elements = document.querySelectorAll('.feature, .project-card, .testimonial-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <SEO 
        title="MERN Portfolio - Full Stack Developer"
        description="Professional portfolio showcasing expertise in MERN stack development, including React, Node.js, MongoDB, and Express."
        keywords="MERN, portfolio, full-stack developer, React, Node.js, MongoDB, Express, JavaScript, TypeScript"
      />
      <div className="home">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Transforming Ideas Into Digital Reality</h1>
              <p>I'm a passionate full-stack developer specializing in creating modern, responsive web applications that deliver exceptional user experiences. With expertise in the MERN stack and modern frontend frameworks, I build solutions that are both beautiful and functional.</p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">Explore My Work <span className="btn-icon">→</span></Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch <span className="btn-icon">→</span></Link>
              </div>
            </div>
          </div>
        </section>
        
        <Stats />
        
        <section className="features">
          <div className="container">
            <div className="section-title">
              <h2>My Expertise</h2>
              <p>Specialized services that drive results</p>
            </div>
            <div className="features-grid staggered-fade-in">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        <Testimonials />
      </div>
    </>
  );
};

export default Home;