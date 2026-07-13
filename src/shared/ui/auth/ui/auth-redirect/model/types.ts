import type { NavigateFn } from '@types';

import type { ReactNode } from 'react';

import type { AuthStep } from '@/features/auth/stepper';

export type AuthRedirectProps = {
  title: string;
  label: string;
  icon?: ReactNode;
  step: AuthStep;
  onNavigate: NavigateFn;
};
