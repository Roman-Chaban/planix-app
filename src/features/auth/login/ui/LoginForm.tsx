'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginActions, loginFormFields, useLogin } from '@/features/auth/login';

import type { AuthStep } from '@/features/auth/stepper';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AppForm, FormFields } from '@/shared/ui';

type LoginFormProps = {
  onNavigate: (step: AuthStep) => void;
};

export const LoginForm: FC<LoginFormProps> = ({ onNavigate }) => {
  const { t } = useTranslation(NS.AUTH);
  const { isValid, isSubmitting, form, onSubmit, control } = useLogin(t);

  const isSubmitDisabled = !isValid || isSubmitting;

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormFields fields={loginFormFields} translationNamespace={NS.AUTH} />

      <LoginActions
        control={control}
        rememberMeLabel={t('login.rememberMe')}
        forgotPasswordLabel={t('login.forgotPassword')}
        submitLabel={t('login.submitButton')}
        isValid={isSubmitDisabled}
        isLoading={isSubmitting}
        onForgotPassword={() => onNavigate('forgot')}
      />
    </AppForm>
  );
};
