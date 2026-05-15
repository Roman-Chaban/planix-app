'use client';

import type { FC } from 'react';

import { useAuthLogin } from '@/features/auth/hooks/useAuthLogin';
import { LoginFormView } from '@/features/auth/ui/LoginFormView';

export const LoginForm: FC = () => {
  const form = useAuthLogin();

  return (
    <LoginFormView
      onSubmit={form.onSubmit}
      emailField={form.register('email')}
      passwordField={form.register('password')}
      emailError={form.errors.email?.message}
      passwordError={form.errors.password?.message}
      control={form.control}
    />
  );
};
