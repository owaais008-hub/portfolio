import React from 'react';

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    { value: '50+', label: 'Projects Completed', icon: '🚀' },
    { value: '3+', label: 'Years Experience', icon: '📅' },
    { value: '20+', label: 'Happy Clients', icon: '😊' },
    { value: '100%', label: 'Client Satisfaction', icon: '💯' }
  ];

  return (
    <div className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;