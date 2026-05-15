'use client';

import { useQuery } from '@tanstack/react-query';

import { mockProjects } from '@/entities/project/mocks/projects.mock';
import type { ProjectsResponse } from '@/entities/project/model/types';

import { delay } from '@/shared/lib/helpers/delay/delay';

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
