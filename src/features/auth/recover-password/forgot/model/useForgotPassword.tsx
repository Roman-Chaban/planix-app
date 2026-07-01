import type { SubmitHandler } from 'react-hook-form';

import { ROUTES } from '@/app/routes';

import { AUTH_STEPS, type AuthStep } from '@/features/auth/stepper';
import { supabase } from '@/shared/api/supabase';
import { useAppForm } from '@/shared/lib/hooks';

import { forgotPasswordSchema, type ForgotPasswordSchema } from './schema';

const { AUTH } = ROUTES;
const { RESET } = AUTH_STEPS;

export const useForgotPassword = (onNavigate: (step: AuthStep) => void) => {
  const forgotForm = useAppForm<ForgotPasswordSchema>({
    schema: forgotPasswordSchema,
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = forgotForm;

  const handleSubmit: SubmitHandler<ForgotPasswordSchema> = async (data) => {
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}${AUTH}`,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    onNavigate(RESET);
  };

  return { forgotForm, isValid, isSubmitting, handleSubmit };
};
