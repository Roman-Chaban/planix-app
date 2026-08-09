import type { Status } from '@types';

export type BillingHistoryData = {
  id: number;
  user_id: string;
  payment_date: string;
  duration: string;
  amount: number;
  payment_method: string;
  status: Status;
  created_at: string;
};

export type Billing = {
  id: number;
  userId: string;
  paymentDate: string;
  duration: string;
  amount: number;
  paymentMethod: string;
  status: Status;
  createdAt: string;
  formattedDate: string;
  formattedAmount: string;
};
