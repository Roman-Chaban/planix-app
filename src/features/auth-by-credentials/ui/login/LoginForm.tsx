'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { LoginContent, LoginFields, useLogin } from '@/features/auth-by-credentials';

import { AuthFooter, AuthHeader, AuthRedirect } from '@/shared/ui';

import { AuthWrapper } from '@/shared/ui/auth-wrapper';

const { LOGIN } = ROUTES;

export const LoginForm = () => {
  const { t } = useTranslation('login');

  const { onSubmit, control } = useLogin();

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
          <AuthRedirect title={t('noAccount')} linkText={t('registration')} href={LOGIN} />
        </AuthFooter>
      }
    >
      <LoginFields />

      <LoginContent control={control} />
    </AuthWrapper>
  );
};
