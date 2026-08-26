import { useQuery } from '@tanstack/react-query';

import { getMyProjects } from '../api/get-my-projects';
import { queryKeys } from '../queryKeys/queryKeys';

export const useMyProjects = () => {
  return useQuery({
    queryKey: queryKeys.projects.my,
    queryFn: getMyProjects,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
