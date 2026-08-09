import type { ToastVariant } from '@/shared/ui/toast/lib/toast.constants';

export type ToastState = {
  current: ToastPayload | null;
};

export type ToastPayload = {
  variant: ToastVariant;
  description: string;
};
