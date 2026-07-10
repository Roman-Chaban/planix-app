import { useLogoutMutation } from './useLogout.mutation';

export const useLogout = () => {
  const mutation = useLogoutMutation();

  return {
    logout: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
