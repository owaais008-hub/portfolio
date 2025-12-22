import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // In a real application, you would integrate with Google Analytics or another analytics service
    // For now, we'll just log to the console
    // console.log('Page viewed:', location.pathname + location.search);

    // Example Google Analytics integration (uncomment and configure as needed):
    /*
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }
    */
  }, [location]);

  return null; // This component doesn't render anything
};

export default Analytics;