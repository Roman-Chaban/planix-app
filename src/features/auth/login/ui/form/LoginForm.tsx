'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { LoginContent, useLogin, loginFormFields } from '@/features/auth/login';

import {
  AuthFooter,
  AuthHeader,
  AuthRedirect,
  AuthWrapper,
  FormFields,
} from '@/shared/ui';

const { LOGIN } = ROUTES;

export const LoginForm = () => {
  const { t } = useTranslation('login');

  const { onSubmit, control, register, errors, isValid } = useLogin();

  const formFieldsProps = {
    translationNamespace: 'login',
    register,
    errors,
    isValid,
  };

  return (
    <AuthWrapper
      onSubmit={onSubmit}
      header={
        <AuthHeader
          title={t('title')}
          subtitle={t('subtitle')}
          highlightedText={t('highlightedText')}
          isHighlightedIcon
        />
      }
      footer={
        <AuthFooter>
          <AuthRedirect
            title={t('noAccount')}
            linkText={t('registration')}
            href={LOGIN}
          />
        </AuthFooter>
      }
    >
      <FormFields fields={loginFormFields} {...formFieldsProps} />

      <LoginContent control={control} isValid={isValid} />
    </AuthWrapper>
  );
};
