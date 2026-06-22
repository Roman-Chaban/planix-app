import type { SubmitHandler } from 'react-hook-form';

import { ROUTES } from '@/app/routes';
import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from '@/features/auth/recover-password';
import { supabase } from '@/shared/api/supabase';
import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

const { RESET_PASSWORD } = ROUTES;

export const useForgotPassword = () => {
  const localizedRouter = useLocalizedRouter();

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
      redirectTo: `${window.location.origin}${RESET_PASSWORD}`,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    localizedRouter.push(RESET_PASSWORD);
  };

  return { form, isValid, isSubmitting, onSubmit };
};
