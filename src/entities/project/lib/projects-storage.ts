import type { Project } from '@/widgets/project-table/model/types';

const STORAGE_KEY = 'planix_projects';

export const getProjectsFromStorage = (): Project[] => {
  if (typeof window === 'undefined') return [];

  try {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveProjectsToStorage = (projects: Project[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};
