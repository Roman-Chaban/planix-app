'use client';

import { useQuery } from '@tanstack/react-query';

import type { ProjectsResponse } from '@/features/projects/model/types';

import { delay } from '@/shared/lib/helpers/delay/delay';
import { mockProjects } from '@/shared/mocks/projects.mock';

export const useAllProjects = () => {
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
