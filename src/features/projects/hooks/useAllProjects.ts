'use client';

import { useQuery } from '@tanstack/react-query';

import type { GetProjectsParams, ProjectsResponse } from '@/features/projects/model/types';

import { delay } from '@/shared/lib/helpers/delay/delay';
import { mockProjects } from '@/shared/mocks/projects.mock';

export const useAllProjects = (params: GetProjectsParams = {}) => {
  return useQuery({
    queryKey: ['projects', 'all', params],
    queryFn: async (): Promise<ProjectsResponse> => {
      await delay(400);

      let projects = [...mockProjects];

      if (params.search) {
        const search = params.search.toLowerCase();
        projects = projects.filter(
          (project) =>
            project.name.toLowerCase().includes(search) ||
            project.client.name.toLowerCase().includes(search),
        );
      }

      return {
        data: projects,
        meta: {
          total: projects.length,
          page: 1,
          limit: projects.length,
          totalPages: 1,
        },
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes delay
  });
};
