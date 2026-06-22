import type { TFunction } from 'i18next';
import type { SubmitHandler } from 'react-hook-form';

import { ROUTES } from '@/app/routes';
import { loginSchema, type LoginFormSchema } from '@/features/auth/login';
import { supabase } from '@/shared/api/supabase';
import { setFormErrors } from '@/shared/lib';
import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

const { DASHBOARD } = ROUTES;

export const useLogin = (t: TFunction) => {
  const localizedRouter = useLocalizedRouter();

  const form = useAppForm<LoginFormSchema>({
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
  } = form;

  const handleLogin = async (data: LoginFormSchema) => {
    const { email, password } = data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    localizedRouter.push(DASHBOARD);
  };

  const onSubmit: SubmitHandler<LoginFormSchema> = async (data) => {
    try {
      await handleLogin(data);
    } catch {
      setFormErrors<LoginFormSchema>({
        form,
        fields: ['email', 'password'],
        message: t('login.validation.invalidCredentials'),
      });
    }
  };

  return {
    isValid,
    isSubmitting,
    control,
    form,
    onSubmit,
  };
};
