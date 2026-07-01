'use client';

import { AuthWrapper } from '@/shared/ui';

import { useAuthStepper } from '../model/useAuthStepper';

export const AuthStepper = () => {
  const { header, footer, Component, hydrated, currentStep } = useAuthStepper();

  if (!currentStep) return null;
  if (!hydrated) return null;

  return (
    <AuthWrapper header={header} footer={footer}>
      <Component />
    </AuthWrapper>
  );
};
