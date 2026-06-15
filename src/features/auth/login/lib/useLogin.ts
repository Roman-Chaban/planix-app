'use client';

import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { loginSchema } from '@/features/auth/login';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';

export const useLogin = () => {
  const { t } = useTranslation(NS.LOGIN);

  const schema = useMemo(() => loginSchema(t), [t]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema),

    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log('Login Submit:', data);
  });

  return {
    register,
    control,
    errors,
    isValid,
    onSubmit,
  };
};
