'use client';

import type { FC } from 'react';

import { useAuthLogin } from '@/features/auth/hooks/useAuthLogin';
import { AuthLoginFormView } from '@/features/auth/ui/auth-login-form-view/AuthLoginFormView';

export const AuthLoginForm: FC = () => {
  const form = useAuthLogin();

  return (
    <AuthLoginFormView
      onSubmit={form.onSubmit}
      emailField={form.register('email')}
      passwordField={form.register('password')}
      emailError={form.errors.email?.message}
      passwordError={form.errors.password?.message}
      control={form.control}
    />
  );
};
