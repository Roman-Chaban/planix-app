'use client';

import type { FC } from 'react';

import { useAuthLogin } from '@/features/auth/hooks/useAuthLogin';
import { AuthLoginFormView } from '@/features/auth/ui/AuthLoginFormView';

export const AuthLoginForm: FC = () => {
  const { register, onSubmit, control, errors } = useAuthLogin();

  return (
    <AuthLoginFormView register={register} onSubmit={onSubmit} control={control} errors={errors} />
  );
};
