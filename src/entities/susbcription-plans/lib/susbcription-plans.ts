import type { Plan } from '../model/susbcription-plans.types';

import { SUBSCRIPTION_PLANS, supabase } from '@/shared/api';

export const getSubscriptionPlans = async (): Promise<Plan[]> => {
  const { data, error } = await supabase
    .from(SUBSCRIPTION_PLANS)
    .select('*')
    .order('price', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};
