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

import { mapCreateProject, mapUpdateProject } from './lib/project.mappers';

export const useProjectActions = () => {
  const queryClient = useQueryClient();

  const invalidateProjects = () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.projects.all,
    });
  };

  const createProject = useMutation<Project, Error, CreateProjectPayload>({
    mutationFn: (formData) => {
      return createProjectRepository(mapCreateProject(formData));
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
