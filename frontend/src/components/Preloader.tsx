import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds or when content is loaded
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // In a real app, you might want to hide the preloader when all critical resources are loaded
    // For example, when images, fonts, or other assets are finished loading

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Preloader;