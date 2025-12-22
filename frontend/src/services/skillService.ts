import api from './api';

interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Other';
  icon?: string;
  createdAt: string;
}

export type { Skill };

// Get all skills
export const getSkills = async (): Promise<Skill[]> => {
  try {
    const response = await api.get('/skills');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

// Get a single skill by ID
export const getSkill = async (id: string): Promise<Skill> => {
  try {
    const response = await api.get(`/skills/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching skill:', error);
    throw error;
  }
};

// Create a new skill
export const createSkill = async (skillData: Omit<Skill, 'id' | 'createdAt'>): Promise<Skill> => {
  try {
    const response = await api.post('/skills', skillData);
    return response.data.data;
  } catch (error) {
    console.error('Error creating skill:', error);
    throw error;
  }
};

// Update a skill
export const updateSkill = async (id: string, skillData: Partial<Skill>): Promise<Skill> => {
  try {
    const response = await api.put(`/skills/${id}`, skillData);
    return response.data.data;
  } catch (error) {
    console.error('Error updating skill:', error);
    throw error;
  }
};

// Delete a skill
export const deleteSkill = async (id: string): Promise<void> => {
  try {
    await api.delete(`/skills/${id}`);
  } catch (error) {
    console.error('Error deleting skill:', error);
    throw error;
  }
};