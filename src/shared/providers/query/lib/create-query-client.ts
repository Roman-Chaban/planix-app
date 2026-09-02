import { QueryClient } from '@tanstack/react-query';

import { queryClientConfig } from '@/shared/providers/query/config/query-client-config';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: queryClientConfig,
  });
};
