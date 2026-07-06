'use client';

import type { LoginFormProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { AUTH_STEPS } from '@/features/auth/stepper';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, FormFields } from '@/shared/ui';

import { loginFormFields } from '../lib/form-config';
import { useLogin } from '../model/useLogin';

import { LoginActions } from './LoginActions';

const { FORGOT } = AUTH_STEPS;

export const LoginForm = ({ onNavigate }: LoginFormProps) => {
  const { t } = useTranslation(NS.AUTH);

  const { isValid, isSubmitting, loginForm, handleSubmit, control } = useLogin(t);

  const isSubmitDisabled = !isValid || isSubmitting;

  return (
    <AppForm form={loginForm} onSubmit={handleSubmit}>
      <FormFields fields={loginFormFields} translationNamespace={NS.AUTH} />

      <LoginActions
        control={control}
        rememberMeLabel={t('login.rememberMe')}
        forgotPasswordLabel={t('login.forgotPassword')}
        submitLabel={t('login.submitButton')}
        isValid={isSubmitDisabled}
        isLoading={isSubmitting}
        onForgotPassword={() => onNavigate(FORGOT)}
      />
    </AppForm>
  );
};
