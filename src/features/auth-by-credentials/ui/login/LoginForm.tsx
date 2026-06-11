'use client';

import { useTranslation } from 'react-i18next';

import { LoginContent, LoginFields } from '@/features/auth-by-credentials';
import { useLogin } from '@/features/auth-by-credentials/lib/useLogin';

import { AuthFooter, AuthHeader } from '@/shared/ui';

import { AuthWrapper } from '@/shared/ui/auth-wrapper';

export const LoginForm = () => {
  const { t } = useTranslation('login');

  const form = useLogin();

  return (
    <AuthWrapper
      onSubmit={form.onSubmit}
      header={
        <AuthHeader
          title={t('title')}
          subtitle={t('subtitle')}
          highlightedText={t('highlightedText')}
        />
      }
      footer={<AuthFooter title={t('noAccount')} link={t('registration')} />}
    >
      <LoginFields
        emailField={form.register('email')}
        passwordField={form.register('password')}
        emailError={form.errors.email?.message}
        passwordError={form.errors.password?.message}
      />

      <LoginContent control={form.control} />
    </AuthWrapper>
  );
};
