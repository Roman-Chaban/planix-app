'use client';

import { AuthWrapper } from '@/shared/ui';

import { useAuthStepper } from '../model/useAuthStepper';

export const AuthStepper = () => {
  const { header, footer, Component } = useAuthStepper();

  return (
    <AuthWrapper header={header} footer={footer}>
      <Component />
    </AuthWrapper>
  );
};
