'use client';

import { useSession } from '@/app/providers/auth/useSession';

export const useAuth = () => {
  const { session, isLoading } = useSession();

  return {
    session,
    isLoading,
    isAuthenticated: !!session?.user,
  };
};
