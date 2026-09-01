import type { Billing } from '../model/types';

import { BILLING_HISTORY, PAYMENT_DATE, USER_ID } from '@/shared/api';
import { supabase } from '@/shared/api/supabase';

import { mapBilling } from '../lib/map-billing';

export const getBillingHistory = async (userId: string): Promise<Billing[]> => {
  const { data, error } = await supabase
    .from(BILLING_HISTORY)
    .select('*')
    .eq(USER_ID, userId)
    .order(PAYMENT_DATE, { ascending: false });

  if (error) {
    throw error;
  }

  if (!data) return [];

  return data.map(mapBilling);
};
