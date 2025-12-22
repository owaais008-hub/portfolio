import React from 'react';
import type { Skill } from '../services/skillService';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="skill-item fade-in">
      <div className="skill-header">
        <h3>{skill.name}</h3>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;