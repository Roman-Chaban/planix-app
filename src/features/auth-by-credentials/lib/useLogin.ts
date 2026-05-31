'use client';

import { useForm } from 'react-hook-form';

import type { FormValues } from '@/features/auth-by-credentials/model/types';

export const useLogin = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      checked: false,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log('Login Submit:', data);
  });

  return {
    ...form,
    onSubmit,
    errors: form.formState.errors,
  };
};
