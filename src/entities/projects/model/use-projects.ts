'use client';

import { useQuery } from '@tanstack/react-query';

import { getProjects } from '../api';
import { queryKeys } from '../query-keys/query-keys';

export const useProjects = () => {
  return useQuery({
    queryKey: queryKeys.projects.all,

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
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
