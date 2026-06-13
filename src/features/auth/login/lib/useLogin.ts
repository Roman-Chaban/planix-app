'use client';

import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { loginSchema } from '@/features/auth/login';

export const useLogin = () => {
  const { t } = useTranslation('login');

  const schema = useMemo(() => loginSchema(t), [t]);

  const form = useForm({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log('Login Submit:', data);
  });

  return {
    register: form.register,
    control: form.control,
    errors: form.formState.errors,
    isValid: form.formState.isValid,
    onSubmit,
  };
};
