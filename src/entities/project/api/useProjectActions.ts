'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Project } from '@/widgets/project-table/model/types';
import {
  type CreateProjectPayload,
  type DeleteProjectPayload,
  type UpdateProjectPayload,
  createProject as createProjectRepository,
  deleteProject as deleteProjectRepository,
  updateProject as updateProjectRepository,
} from '@/entities/project';
import { queryKeys } from '@/entities/project/api/queryKeys';

export const useProjectActions = () => {
  const queryClient = useQueryClient();

  const invalidate = () => queryClient.invalidateQueries({ queryKey: queryKeys.projects.all });

  const createProject = useMutation<Project, Error, CreateProjectPayload>({
    mutationFn: async (formData) => {
      const newProjectPayload: Partial<Project> = {
        name: formData.projectName,
        client: { id: String(Date.now()), name: formData.clientName, avatar: '' },
        dueDate: formData.dueDate,
        platform: formData.platform,
        price: Number(formData.price),
        progress: 0,
        status: 'Pending',
        slug: formData.projectName.toLowerCase().replace(/ /g, '-'),
      };

      return createProjectRepository(newProjectPayload);
    },
    onSuccess: invalidate,
  });

  const deleteProject = useMutation<void, Error, DeleteProjectPayload>({
    mutationFn: async ({ id }) => {
      return deleteProjectRepository(id);
    },
    onSuccess: invalidate,
  });

  const updateProject = useMutation<Project, Error, UpdateProjectPayload>({
    mutationFn: async ({ id, data }) => {
      return updateProjectRepository(id, {
        name: data.projectName,
        dueDate: data.dueDate,
        price: Number(data.price),
        platform: data.platform,
      });
    },
    onSuccess: invalidate,
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
