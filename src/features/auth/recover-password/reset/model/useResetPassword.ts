import type { SubmitHandler } from 'react-hook-form';

import { AUTH_STEPS } from '@/features/auth/stepper';
import { supabase } from '@/shared/api/supabase';
import { useAppForm } from '@/shared/lib/hooks';
import type { NavigateFn } from '@/shared/types/types';

import { resetSchema, type ResetFormSchema } from './reset-form.schema';

const { VERIFY } = AUTH_STEPS;

export const useResetPassword = (onNavigate: NavigateFn) => {
  const resetForm = useAppForm<ResetFormSchema>({
    schema: resetSchema,
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = resetForm;

  const handleSubmit: SubmitHandler<ResetFormSchema> = async (data) => {
    const { error } = await supabase.auth.updateUser({
      password: data.newPassword,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    onNavigate(VERIFY);
  };

  return { resetForm, isValid, isSubmitting, handleSubmit };
};
