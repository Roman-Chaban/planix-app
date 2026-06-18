import type { SubmitHandler } from 'react-hook-form';

import { ROUTES } from '@/app/routes';
import {
  signUpFormSchema,
  type RegisterFormSchema,
} from '@/features/auth/registration';
import { supabase } from '@/shared/api/supabase';
import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

const { DASHBOARD } = ROUTES;

export const useRegistration = () => {
  const localizedRouter = useLocalizedRouter();

  const form = useAppForm<RegisterFormSchema>({
    schema: signUpFormSchema,
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
      contact: '',
      birthDate: '',
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
    const { email, password, fullName, contact, birthDate } = data;

    const { data: authData, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          contact: contact,
          birth_date: birthDate || null,
        },
      },
    });

    if (error) return;

    if (authData.user) {
      localizedRouter.push(DASHBOARD);
    }
  };

  return { isValid, isSubmitting, onSubmit, form };
};
