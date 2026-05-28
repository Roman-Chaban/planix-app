import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Project } from '@/widgets/project-table/model/types';
import {
  type CreateProjectPayload,
  type DeleteProjectPayload,
  type UpdateProjectPayload,
  invalidateProjectsCache,
  simulateApiDelay,
} from '@/entities/project';
import { mockProjects } from '@/entities/project/mocks/projects.mock';

export const useProjectActions = () => {
  const queryClient = useQueryClient();

  const createProject = useMutation<Project, Error, CreateProjectPayload>({
    mutationFn: async (formData) => {
      await simulateApiDelay();
      const newProject: Project = {
        id: Math.random().toString(36).substring(7),
        name: formData.projectName,
        client: { id: Math.random().toString(), name: formData.clientName, avatar: '' },
        dueDate: formData.dueDate,
        platform: formData.platform || null,
        price: Number(formData.price),
        progress: 0,
        status: 'Pending',
      };
      mockProjects.push(newProject);
      return newProject;
    },

    onSuccess: () => invalidateProjectsCache(queryClient),
  });

  const deleteProject = useMutation<void, Error, DeleteProjectPayload>({
    mutationFn: async ({ id }) => {
      await simulateApiDelay();

      const projectsIndexes = mockProjects.findIndex((project) => project.id === id);
      if (projectsIndexes !== -1) {
        mockProjects.splice(projectsIndexes, 1);
      }
    },

    onSuccess: () => invalidateProjectsCache(queryClient),
  });

  const updateProject = useMutation<Project, Error, UpdateProjectPayload>({
    mutationFn: async ({ id, data }) => {
      await simulateApiDelay();

      const projectsIndexes = mockProjects.findIndex((project) => project.id === id);

      if (projectsIndexes !== -1) {
        mockProjects[projectsIndexes] = {
          ...mockProjects[projectsIndexes],
          name: data.projectName ?? mockProjects[projectsIndexes].name,
        };

        return mockProjects[projectsIndexes];
      }

      return mockProjects[projectsIndexes];
    },

    onSuccess: () => invalidateProjectsCache(queryClient),
  });

  const isProjectActionPending =
    createProject.isPending || deleteProject.isPending || updateProject.isPending;

  return {
    createProject,
    deleteProject,
    updateProject,
    isProjectActionPending,
  };
};
