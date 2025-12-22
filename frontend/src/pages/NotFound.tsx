import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found - MERN Portfolio"
        description="The page you're looking for doesn't exist or has been moved. Return to the homepage or contact us for assistance."
        keywords="404, not found, page not found, error, MERN portfolio"
      />
      <div className="not-found">
        <section className="section">
          <div className="container">
            <div className="not-found-content">
              <h1 className="not-found-title">404</h1>
              <h2>Page Not Found</h2>
              <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
              <div className="not-found-actions">
                <Link to="/" className="btn btn-primary">Go Home</Link>
                <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;