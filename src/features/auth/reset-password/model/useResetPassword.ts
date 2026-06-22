import type { SubmitHandler } from 'react-hook-form';

import {
  resetSchema,
  type ResetFormSchema,
} from '@/features/auth/reset-password';
import { supabase } from '@/shared/api/supabase';
import { useAppForm } from '@/shared/lib/hooks';

export const useResetPassword = () => {
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
  };

  return { form, isValid, isSubmitting, onSubmit };
};
