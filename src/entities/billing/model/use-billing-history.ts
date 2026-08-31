import type { Billing } from './types';

import { useQuery } from '@tanstack/react-query';

import { supabase } from '@/shared/api/supabase';

import { getBillingHistory } from '../api/get-billing-history';
import { queryKeys } from '../queryKeys/queryKeys';

export const useBillingHistory = () => {
  return useQuery<Billing[]>({
    queryKey: queryKeys.billingHistory.all,
    queryFn: async () => {
      const { data: session } = await supabase.auth.getSession();
      const user = session.session?.user;

      if (!user) return [];

      return getBillingHistory(user.id);
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
