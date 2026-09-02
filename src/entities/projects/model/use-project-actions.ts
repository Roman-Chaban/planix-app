'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  type CreateProjectPayload,
  type DeleteProjectPayload,
  type UpdateProjectPayload,
  type Project,
  createProject as createProjectRepository,
  deleteProject as deleteProjectRepository,
  updateProject as updateProjectRepository,
} from '@/entities/projects';

import { queryKeys } from '@/entities/projects/query-keys/query-keys';

import { mapCreateProject } from '../lib/map-create-project';
import { mapUpdateProject } from '../lib/map-update-project';

export const useProjectActions = () => {
  const queryClient = useQueryClient();

  const invalidateProjects = () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.projects.all,
    });
  };

  const createProject = useMutation<Project, Error, CreateProjectPayload>({
    mutationFn: ({ formData, files }) => {
      return createProjectRepository(mapCreateProject(formData, files));
    },

    onSuccess: invalidateProjects,
  });

  const deleteProject = useMutation<void, Error, DeleteProjectPayload>({
    mutationFn: ({ id }) => deleteProjectRepository(id),
    onSuccess: invalidateProjects,
  });

  const updateProject = useMutation<Project, Error, UpdateProjectPayload>({
    mutationFn: ({ id, data }) => updateProjectRepository(id, mapUpdateProject({ id, data })),
    onSuccess: invalidateProjects,
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
