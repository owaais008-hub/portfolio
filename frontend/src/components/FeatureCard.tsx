import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature hover-lift">
      <div className="feature-icon" style={{ animation: 'float 3s ease-in-out infinite' }}>{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;