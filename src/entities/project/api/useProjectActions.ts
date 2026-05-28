import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Project } from '@/widgets/project-table/model/types';
import {
  type CreateProjectPayload,
  type DeleteProjectPayload,
  type UpdateProjectPayload,
  invalidateProjectsCache,
  simulateApiDelay,
  createProject as createProjectRepository,
  updateProject as updateProjectRepository,
  deleteProject as deleteProjectRepository,
} from '@/entities/project';

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
      return createProjectRepository(newProject);
    },

    onSuccess: () => invalidateProjectsCache(queryClient),
  });

  const deleteProject = useMutation<void, Error, DeleteProjectPayload>({
    mutationFn: async ({ id }) => {
      await simulateApiDelay();

      return deleteProjectRepository(id);
    },

    onSuccess: () => invalidateProjectsCache(queryClient),
  });

  const updateProject = useMutation<Project, Error, UpdateProjectPayload>({
    mutationFn: async ({ id, data }) => {
      await simulateApiDelay();

      const updatedProject = updateProjectRepository(id, {
        name: data.projectName,
        dueDate: data.dueDate,
        price: Number(data.price),
        platform: data.platform,
      });

      if (!updatedProject) {
        throw new Error('Project not found');
      }

      return updatedProject;
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
