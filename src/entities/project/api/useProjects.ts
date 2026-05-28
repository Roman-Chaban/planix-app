'use client';

import { getProjects } from '@/entities/project';
import { queryKeys } from '@/entities/project/api/queryKeys';

import { delay } from '@/shared/lib/async/delay';
import { useQueryWithSkeleton } from '@/shared/lib/hooks/useQueryWithSkeleton';
import { ProjectsTableSkeleton } from '@/shared/ui/skeletons/project-table/ui/ProjectTableSkeleton';

export const useProjects = () => {
  const projects = getProjects();

  return useQueryWithSkeleton({
    queryKey: queryKeys.projects.all,
    Skeleton: ProjectsTableSkeleton,

    queryFn: async () => {
      await delay(1500);

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

    staleTime: 5 * 60 * 1000,
  });
};
