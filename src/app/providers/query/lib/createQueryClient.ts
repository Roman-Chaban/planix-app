import { QueryClient } from '@tanstack/react-query';

import { queryClientConfig } from '@/app/providers/query/config/queryClientConfig';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: queryClientConfig,
  });
};
