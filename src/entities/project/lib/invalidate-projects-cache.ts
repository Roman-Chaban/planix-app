import type { useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '../api/queryKeys';

export const invalidateProjectsCache = (queryClient: ReturnType<typeof useQueryClient>) => {
  queryClient.invalidateQueries({ queryKey: queryKeys.projects.all });
};
