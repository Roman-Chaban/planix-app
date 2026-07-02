'use client';

import { queryKeys } from '@/entities/project/api/queryKeys';
import { getProjects } from '@/entities/project/model/projects';
import { useQueryWithSkeleton } from '@/shared/lib/hooks/useQueryWithSkeleton';
import { ProjectsTableSkeleton } from '@/shared/ui/skeletons/project-table/ui/ProjectTableSkeleton';

export const useProjects = () => {
  return useQueryWithSkeleton({
    queryKey: queryKeys.projects.all,
    Skeleton: ProjectsTableSkeleton,

    queryFn: async () => {
      const data = await getProjects();

      return {
        data: data,
        meta: {
          total: data.length,
          page: 1,
          limit: data.length,
          totalPages: 1,
        },
      };
    },
    staleTime: 5 * 60 * 1000,
  });
};
