import { useMutation } from '@tanstack/react-query';

import { supabase } from '@/shared/api';

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }
    },
  });
};
