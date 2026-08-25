import type { Billing, BillingHistoryData } from '../model/billing.types';

import dayjs from 'dayjs';

import { DATE_FORMAT, formatCurrency } from '@/shared/lib';

export const mapBilling = (data: BillingHistoryData): Billing => {
  const formattedDate = dayjs(data.created_at).format(DATE_FORMAT.DISPLAY);
  const formattedAmount = formatCurrency(data.amount);

  return {
    id: data.id,
    userId: data.user_id,
    paymentDate: data.payment_date,
    duration: data.duration,
    amount: data.amount,
    paymentMethod: data.payment_method,
    status: data.status,
    createdAt: data.created_at,
    formattedDate: formattedDate,
    formattedAmount: formattedAmount,
  };
};
