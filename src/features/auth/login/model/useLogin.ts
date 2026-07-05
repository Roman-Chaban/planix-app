import type { SubmitHandler } from 'react-hook-form';

import { supabase } from '@/shared/api/supabase';
import { setFormErrors } from '@/shared/lib';
import { useAppForm } from '@/shared/lib/hooks';
import type { TranslateFn } from '@/shared/types/types';

import { loginSchema, type LoginFormSchema } from './schema';

export const useLogin = (t: TranslateFn) => {
  const loginForm = useAppForm<LoginFormSchema>({
    schema: loginSchema,
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const {
    control,
    formState: { isValid, isSubmitting },
  } = loginForm;

  const handleLogin = async (data: LoginFormSchema) => {
    const { email, password } = data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  };

  const handleSubmit: SubmitHandler<LoginFormSchema> = async (data) => {
    try {
      await handleLogin(data);
    } catch {
      setFormErrors<LoginFormSchema>({
        form: loginForm,
        fields: ['email', 'password'],
        message: t('login.validation.invalidCredentials'),
      });
    }
  };

  return {
    isValid,
    isSubmitting,
    control,
    loginForm,
    handleSubmit,
  };
};
