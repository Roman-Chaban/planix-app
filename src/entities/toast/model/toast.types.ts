import type { ToastVariant } from '@/shared/ui/toast/lib/constants';

export type ToastState = {
  current: ToastPayload | null;
};

export type ToastPayload = {
  variant: ToastVariant;
  description: string;
};
