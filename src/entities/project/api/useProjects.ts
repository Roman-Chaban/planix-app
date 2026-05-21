'use client';

import { mockProjects } from '@/entities/project/mocks/projects.mock';
import { queryKeys } from '@/shared/api/queryKeys';

import { delay } from '@/shared/lib/async/delay';
import { useQueryWithSkeleton } from '@/shared/lib/hooks/useQueryWithSkeleton';
import { ProjectsTableSkeleton } from '@/shared/ui/skeletons/project-table/ui/ProjectTableSkeleton';

export const useProjects = () => {
  return useQueryWithSkeleton({
    queryKey: queryKeys.projects.all,
    Skeleton: ProjectsTableSkeleton,

    queryFn: async () => {
      await delay(1500);

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
