'use client';

import type { EmailSentFn } from '@types';
import type { SubmitHandler } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';

import { AUTH_STEPS } from '@/features/auth/stepper';
import { supabase } from '@/shared/api/supabase';
import { DEFAULT_LOCALE } from '@/shared/i18n';
import { buildHref } from '@/shared/lib';
import { useAppForm } from '@/shared/lib/hooks';

import { forgotPasswordSchema, type ForgotPasswordSchema } from './forgot.schema';

const { AUTH } = ROUTES;
const { RESET } = AUTH_STEPS;

type UseForgotPasswordParams = {
  onEmailSent: EmailSentFn;
};

export const useForgotPassword = ({ onEmailSent }: UseForgotPasswordParams) => {
  const { i18n } = useTranslation();

  const forgotForm = useAppForm<ForgotPasswordSchema>({
    schema: forgotPasswordSchema,
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = forgotForm;

  const isSubmitDisabled = !isValid || isSubmitting;

  const handleSubmit: SubmitHandler<ForgotPasswordSchema> = async (data) => {
    const locale = i18n.language || DEFAULT_LOCALE;

    const redirectTo =
      `${window.location.origin}` + `${buildHref(AUTH, locale)}` + `?step=${RESET}`;

    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    onEmailSent(data?.email);
  };

  return {
    forgotForm,
    isValid,
    isSubmitting,
    isSubmitDisabled,
    handleSubmit,
  };
};
