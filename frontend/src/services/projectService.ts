import api from './api';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
}

export type { Project };

// Get all projects
export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await api.get('/projects');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// Get a single project by ID
export const getProject = async (id: string): Promise<Project> => {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

// Create a new project
export const createProject = async (projectData: Omit<Project, 'id' | 'createdAt'>): Promise<Project> => {
  try {
    const response = await api.post('/projects', projectData);
    return response.data.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// Update a project
export const updateProject = async (id: string, projectData: Partial<Project>): Promise<Project> => {
  try {
    const response = await api.put(`/projects/${id}`, projectData);
    return response.data.data;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

// Delete a project
export const deleteProject = async (id: string): Promise<void> => {
  try {
    await api.delete(`/projects/${id}`);
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};