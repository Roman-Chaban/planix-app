'use client';

import { useQuery } from '@tanstack/react-query';

import { queryKeys, getProfile } from '@/entities/profile';
import { supabase } from '@/shared/api/supabase';

export const useProfile = () => {
  return useQuery({
    queryKey: queryKeys.profile.all,

    queryFn: async () => {
      const { data: session } = await supabase.auth.getSession();
      const user = session.session?.user;

      if (!user) return null;

      return getProfile(user.id);
    },

    staleTime: 1000 * 60 * 5,

    retry: false,
  });
};
