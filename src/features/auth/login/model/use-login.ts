import type { TranslateFn } from '@types';
import type { SubmitHandler } from 'react-hook-form';

import { supabase } from '@/shared/api/supabase';
import { ROUTES } from '@/shared/config';
import { setFormErrors } from '@/shared/lib';
import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

import { loginSchema, type LoginFormSchema } from './schema';

const { DASHBOARD } = ROUTES;

export const useLogin = (t: TranslateFn) => {
  const localizedRouter = useLocalizedRouter();

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

    localizedRouter.push(DASHBOARD);
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
