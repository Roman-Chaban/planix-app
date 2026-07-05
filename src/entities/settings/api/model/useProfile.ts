'use client';

import { useQuery } from '@tanstack/react-query';

import { supabase } from '@/shared/api/supabase';

import { getProfile } from '../lib/profile';
import { queryKeys } from '../queryKeys/queryKeys';

export const useProfile = () => {
  const query = useQuery({
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

  return {
    ...query,
    profile: query.data,
  };
};
