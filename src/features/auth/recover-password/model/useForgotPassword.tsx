import type { SubmitHandler } from 'react-hook-form';

import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from '@/features/auth/recover-password';
import { useAppForm } from '@/shared/lib/hooks';

export const useForgotPassword = () => {
  const form = useAppForm<ForgotPasswordSchema>({
    schema: forgotPasswordSchema,
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  // TODO: [Waiting for form implementation]
  const onSubmit: SubmitHandler<ForgotPasswordSchema> = (data) => {
    console.log('Login Form Data:', data);
  };

  return { form, isValid, isSubmitting, onSubmit };
};
