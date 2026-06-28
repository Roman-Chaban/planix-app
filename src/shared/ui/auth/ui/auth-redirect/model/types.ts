import type { ReactNode } from 'react';

import type { AuthStep } from '@/features/auth/stepper';
import type { NavigateFn } from '@/shared/types/types';

export type AuthRedirectProps = {
  title: string;
  label: string;
  icon?: ReactNode;
  step: AuthStep;
  onNavigate: NavigateFn;
};
