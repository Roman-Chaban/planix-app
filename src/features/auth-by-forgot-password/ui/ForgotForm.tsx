'use client';

import { useTranslation } from 'react-i18next';

import { AuthHeader, AuthWrapper } from '@/shared/ui';

export const ForgotForm = () => {
  const { t } = useTranslation('forgotPasswordForm');
  return (
    <AuthWrapper header={<AuthHeader title={t('title')} subtitle={t('subtitle')} />}></AuthWrapper>
  );
};
