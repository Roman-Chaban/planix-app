import type { SubmitHandler } from 'react-hook-form';

import { supabase } from '@/shared/api/supabase';
import { ROUTES } from '@/shared/config/routes';

import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

import { type RegisterFormValues, registerSchema } from './schema';

const { SUBSCRIPTION } = ROUTES;

export const useRegistration = () => {
  const localizedRouter = useLocalizedRouter();

  const registrationForm = useAppForm<RegisterFormValues>({
    schema: registerSchema,
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

  const handleSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
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

    localizedRouter.push(SUBSCRIPTION);
  };

  return {
    isValid,
    isSubmitting,
    registrationForm,
    control,
    handleSubmit,
  };
};
