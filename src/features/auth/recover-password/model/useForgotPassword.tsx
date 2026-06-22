import type { SubmitHandler } from 'react-hook-form';

import { ROUTES } from '@/app/routes';
import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from '@/features/auth/recover-password';
import { AUTH_STEPS, type AuthStep } from '@/features/auth/stepper';
import { supabase } from '@/shared/api/supabase';
import { useAppForm } from '@/shared/lib/hooks';

const { AUTH } = ROUTES;
const { RESET } = AUTH_STEPS;

export const useForgotPassword = (onNavigate: (step: AuthStep) => void) => {
  const form = useAppForm<ForgotPasswordSchema>({
    schema: forgotPasswordSchema,
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<ForgotPasswordSchema> = async (data) => {
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}${AUTH}`,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    onNavigate(RESET);
  };

  return { form, isValid, isSubmitting, onSubmit };
};
