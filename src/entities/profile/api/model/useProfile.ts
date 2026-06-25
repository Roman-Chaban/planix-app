'use client';

import { useQuery } from '@tanstack/react-query';

import { queryKeys, getProfile } from '@/entities/profile';
import { supabase } from '@/shared/api/supabase';

export const useProfile = () => {
  return useQuery({
    queryKey: queryKeys.profile.all,
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return null;

      return getProfile(user.id);
    },
    staleTime: 1000 * 60 * 5,
  });
};
