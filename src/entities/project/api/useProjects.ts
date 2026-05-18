'use client';

import { useQuery } from '@tanstack/react-query';

import type { ProjectsResponse } from '@/widgets/project-table/config/ProjectTable.types';
import { mockProjects } from '@/entities/project/mocks/projects.mock';

import { delay } from '@/shared/lib/async/delay';

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects', 'all'],
    queryFn: async (): Promise<ProjectsResponse> => {
      await delay(400);

      return {
        data: [...mockProjects],
        meta: {
          total: mockProjects.length,
          page: 1,
          limit: mockProjects.length,
          totalPages: 1,
        },
      };
    },
    staleTime: 5 * 60 * 1000,
  });
};
