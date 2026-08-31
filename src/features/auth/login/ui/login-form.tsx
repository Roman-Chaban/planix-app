'use client';

import type { LoginFormProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AUTH_STEPS } from '@/shared/lib/common/constants';
import { AppForm, Box, FormFields } from '@/shared/ui';

import { loginFormFields } from '../lib/config';
import { useLogin } from '../model/use-login';

import { LoginActions } from './login-actions';

import styles from './login-form.module.scss';

const { FORGOT } = AUTH_STEPS;

export const LoginForm = ({ onNavigate }: LoginFormProps) => {
  const { t } = useTranslation(NS.AUTH);

  const { isValid, isSubmitting, loginForm, handleSubmit, control } = useLogin(t);

  const isSubmitDisabled = !isValid || isSubmitting;

  return (
    <AppForm form={loginForm} onSubmit={handleSubmit} className={styles.loginForm}>
      <Box className={styles.loginContainer}>
        <FormFields fields={loginFormFields} translationNamespace={NS.AUTH} />
      </Box>

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
