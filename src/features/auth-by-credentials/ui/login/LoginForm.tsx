'use client';

import { useTranslation } from 'react-i18next';

import { LoginContent, LoginFields, useLogin } from '@/features/auth-by-credentials';

import { AuthFooter, AuthHeader } from '@/shared/ui';

import { AuthWrapper } from '@/shared/ui/auth-wrapper';

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
      footer={<AuthFooter title={t('noAccount')} link={t('registration')} />}
    >
      <LoginFields />

      <LoginContent control={control} />
    </AuthWrapper>
  );
};
