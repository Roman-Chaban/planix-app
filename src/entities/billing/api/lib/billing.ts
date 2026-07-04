import type { Billing } from '../model/types';

import { supabase } from '@/shared/api/supabase';

import { mapBilling } from './billing.mapper';

export const getBillingHistory = async (userId: string): Promise<Billing[]> => {
  const { data, error } = await supabase
    .from('billing_history')
    .select('*')
    .eq('user_id', userId)
    .order('payment_date', { ascending: false });

  if (error) {
    throw error;
  }

  if (!data) return [];

  return data.map(mapBilling);
};
