import type { SubmitHandler } from 'react-hook-form';

import { ROUTES } from '@/app/routes';

import { supabase } from '@/shared/api/supabase';
import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

import { type RegisterFormSchema, signUpFormSchema } from './schema';

const { DASHBOARD } = ROUTES;

export const useRegistration = () => {
  const localizedRouter = useLocalizedRouter();

  const registrationForm = useAppForm<RegisterFormSchema>({
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
    control,
    formState: { isValid, isSubmitting },
  } = registrationForm;

  const handleSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
    const { email, password, fullName, contact, birthDate } = data;

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          contact: contact,
          birth_date: birthDate,
        },
      },
    });

    if (authError) {
      console.error(`Authentication error ${authError}`);
      return;
    }

    localizedRouter.push(DASHBOARD);
  };

  return {
    isValid,
    isSubmitting,
    handleSubmit,
    registrationForm,
    control,
  };
};
