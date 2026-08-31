'use client';

import { useSession } from '@/shared/providers/auth/model/use-session';

export const useAuth = () => {
  const { session, isLoading } = useSession();

  return {
    session,
    isLoading,
    isAuthenticated: !!session?.user,
  };
};
