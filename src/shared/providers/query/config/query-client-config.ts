import type { DefaultOptions } from '@tanstack/react-query';

export const queryClientConfig: DefaultOptions = {
  queries: {
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,

    retry: 2,

    refetchOnWindowFocus: false,
    refetchOnReconnect: true,

    throwOnError: false,
  },

  mutations: {
    retry: 1,

    throwOnError: false,
  },
};
