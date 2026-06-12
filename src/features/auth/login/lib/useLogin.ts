'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { loginSchema, type LoginSchema } from '@/features/auth/login';

export const useLogin = () => {
  const { t } = useTranslation('login');

  const form = useForm<LoginSchema>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema(t)),
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
