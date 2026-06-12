'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  type ForgotPasswordSchema,
  forgotPasswordSchema,
} from '@/features/auth/recover-password';

export const useForgotPassword = () => {
  const { t } = useTranslation('forgotPasswordForm');

  const form = useForm<ForgotPasswordSchema>({
    mode: 'onBlur',
    resolver: zodResolver(forgotPasswordSchema(t)),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log('Reset Submit:', data);
  });

  return {
    register: form.register,
    errors: form.formState.errors,
    isValid: form.formState.isValid,
    onSubmit,
  };
};
