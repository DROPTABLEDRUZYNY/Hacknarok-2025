// services/projectService.ts
import { Project, Position, Application } from '../types';

const API_BASE_URL = 'http://localhost:8000/api';

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    credentials: 'include',
    ...options
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Request failed');
  }
  
  return response.json();
}

async function getCsrfToken(): Promise<string> {
  await fetch(`${API_BASE_URL}/csrf/`, { credentials: 'include' });
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];
  
  if (!csrfToken) throw new Error('CSRF token not found');
  return csrfToken;
}

export const projectService = {
  // Pobierz wszystkie projekty
  async getAllProjects(): Promise<Project[]> {
    return fetchWithAuth(`${API_BASE_URL}/projects/`);
  },

  // Pobierz szczegóły projektu
  async getProjectDetails(projectId: number): Promise<Project> {
    return fetchWithAuth(`${API_BASE_URL}/projects/${projectId}/`);
  },

  // Utwórz nowy projekt
  async createProject(projectData: Omit<Project, 'id' | 'owner' | 'created_at' | 'positions' | 'applications'>): Promise<Project> {
    const csrfToken = await getCsrfToken();
    
    return fetchWithAuth(`${API_BASE_URL}/projects/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
      },
      body: JSON.stringify(projectData)
    });
  },

  // Zaktualizuj projekt
  async updateProject(projectId: number, updateData: Partial<Project>): Promise<Project> {
    const csrfToken = await getCsrfToken();
    
    return fetchWithAuth(`${API_BASE_URL}/projects/${projectId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
      },
      body: JSON.stringify(updateData)
    });
  },

  // Dezaktywuj projekt
  async deactivateProject(projectId: number): Promise<Project> {
    return this.updateProject(projectId, { is_active: false });
  },

  // Pobierz pozycje w projekcie
  async getProjectPositions(projectId: number): Promise<Position[]> {
    return fetchWithAuth(`${API_BASE_URL}/positions/?project_id=${projectId}`);
  },

  // Pobierz aplikacje do projektu
  async getProjectApplications(projectId: number): Promise<Application[]> {
    return fetchWithAuth(`${API_BASE_URL}/projects/${projectId}/applications/`);
  }
};