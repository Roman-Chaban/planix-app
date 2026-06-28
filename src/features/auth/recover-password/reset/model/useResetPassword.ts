import type { SubmitHandler } from 'react-hook-form';

import {
  resetSchema,
  type ResetFormSchema,
} from '@/features/auth/recover-password/reset';
import { AUTH_STEPS } from '@/features/auth/stepper';
import { supabase } from '@/shared/api/supabase';
import { useAppForm } from '@/shared/lib/hooks';
import type { NavigateFn } from '@/shared/types/types';

const { VERIFY } = AUTH_STEPS;

export const useResetPassword = (onNavigate: NavigateFn) => {
  const form = useAppForm<ResetFormSchema>({
    schema: resetSchema,
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<ResetFormSchema> = async (data) => {
    const { error } = await supabase.auth.updateUser({
      password: data.newPassword,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    onNavigate(VERIFY);
  };

  return { form, isValid, isSubmitting, onSubmit };
};
