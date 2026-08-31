'use client';

import type { Session } from '@supabase/supabase-js';

import type { WithChildren } from '@types';

import { useEffect, useState } from 'react';

import { supabase } from '@/shared/api/supabase';

import { AuthContext } from './auth-context';

export const AuthProvider = ({ children }: WithChildren) => {
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
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
