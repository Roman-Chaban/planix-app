import { useQuery } from '@tanstack/react-query';

import type {
  UseQueryWithSkeletonOptions,
  UseQueryWithSkeletonResult,
} from '@/shared/lib/hooks/model/types';

export const useQueryWithSkeleton = <T>(
  options: UseQueryWithSkeletonOptions<T>,
): UseQueryWithSkeletonResult<T> => {
  const query = useQuery(options);

  return {
    ...query,
    Skeleton: options.Skeleton,
    showSkeleton: query.isLoading && !query.data,
  };
};
