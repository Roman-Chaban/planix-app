import type { SubmitHandler } from 'react-hook-form';

import { ROUTES } from '@/app/routes';
import { loginSchema, type LoginFormSchema } from '@/features/auth/login';
import { supabase } from '@/shared/api/supabase';
import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

const { DASHBOARD } = ROUTES;

export const useLogin = () => {
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

  const login = async (data: LoginFormSchema) => {
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
      await login(data);
    } catch {
      // TODO: [Waiting for toast and translation implementation]
      // form.setError('email', { message: '' });
      // form.setError('password', { message: '' });
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
