'use client';

import { useTranslation } from 'react-i18next';

import { LoginContent, LoginFields } from '@/features/auth-by-credentials';
import { useLogin } from '@/features/auth-by-credentials/lib/useLogin';

import { AuthFooter, AuthHeader } from '@/shared/ui';

import { AuthWrapper } from '@/shared/ui/auth-wrapper';

export const LoginForm = () => {
  const { t } = useTranslation('login');

  const { register, errors, control, onSubmit } = useLogin();

  return (
    <AuthWrapper
      onSubmit={onSubmit}
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
        emailField={register('email')}
        passwordField={register('password')}
        emailError={errors.email?.message}
        passwordError={errors.password?.message}
      />

      <LoginContent control={control} />
    </AuthWrapper>
  );
};
