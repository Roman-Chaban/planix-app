import type { Project } from '@/widgets/project-table/model/types';

import { getProjectsFromStorage, saveProjectsToStorage } from '@/entities/project';

export const getProjects = (): Project[] => {
  return getProjectsFromStorage();
};

export const getProjectById = (id: string): Project | undefined => {
  return getProjects().find((project) => project.id === id);
};

export const createProject = (project: Project): Project => {
  const projects = getProjects();

  const updatedProjects = [...projects, project];

  saveProjectsToStorage(updatedProjects);

  return project;
};

export const updateProject = (id: string, updatedData: Partial<Project>): Project | undefined => {
  const projects = getProjects();

  const updatedProjects = projects.map((project) =>
    project.id === id
      ? {
          ...project,
          ...updatedData,
        }
      : project,
  );

  saveProjectsToStorage(updatedProjects);

  return updatedProjects.find((project) => project.id === id);
};

export const deleteProject = (id: string): void => {
  const projects = getProjects();

  const filteredProjects = projects.filter((project) => project.id !== id);

  saveProjectsToStorage(filteredProjects);
};
