'use client';

import type { Session } from '@supabase/supabase-js';

import { useEffect, useState } from 'react';

import { ROUTES } from '@/app/routes';
import { supabase } from '@/shared/api/supabase';
import { AUTH_SESSION } from '@/shared/lib';
import { useLocalizedRouter } from '@/shared/lib/hooks';
import type { WithChildren } from '@/shared/types/types';

import { AuthContext } from './AuthContext';

const { AUTH, DASHBOARD } = ROUTES;
const { SIGNED_IN, SIGNED_OUT } = AUTH_SESSION;

export const AuthProvider = ({ children }: WithChildren) => {
  const router = useLocalizedRouter();

  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeSession = async () => {
      const { data } = await supabase.auth.getSession();

      setSession(data.session);
      setIsLoading(false);
    };

    initializeSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setIsLoading(false);

      switch (event) {
        case SIGNED_IN:
          router.push(DASHBOARD);
          break;

        case SIGNED_OUT:
          router.push(AUTH);
          break;
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
