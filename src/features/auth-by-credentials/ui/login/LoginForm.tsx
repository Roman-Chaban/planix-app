'use client';

import { useTranslation } from 'react-i18next';

import { LoginFooter, LoginContent, LoginFields } from '@/features/auth-by-credentials';
import { useLogin } from '@/features/auth-by-credentials/lib/useLogin';

import { AuthHeader } from '@/shared/ui';

import { FormWrapper } from '@/shared/ui/auth-wrapper';

export const LoginForm = () => {
  const { t } = useTranslation('login');

  const form = useLogin();

  return (
    <FormWrapper
      onSubmit={form.onSubmit}
      header={
        <AuthHeader
          title={t('title')}
          subtitle={t('subtitle')}
          highlightedText={t('highlightedText')}
        />
      }
      footer={<LoginFooter title={t('noAccount')} link={t('registration')} />}
    >
      <LoginFields
        emailField={form.register('email')}
        passwordField={form.register('password')}
        emailError={form.errors.email?.message}
        passwordError={form.errors.password?.message}
      />

      <LoginContent control={form.control} />
    </FormWrapper>
  );
};
