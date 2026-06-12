'use client';

import { useTranslation } from 'react-i18next';

import { SignUpFields } from '@/features/auth-by-registration';
import { AuthFooter, AuthHeader } from '@/shared/ui';
import { AuthWrapper } from '@/shared/ui/auth-wrapper';

export const SignUpForm = () => {
  const { t } = useTranslation('signUpForm');

  return (
    <AuthWrapper
      header={<AuthHeader title={t('title')} subtitle={t('subtitle')} isHighlightedIcon />}
      footer={<AuthFooter title={t('noAccount')} link={t('registration')} />}
    >
      <SignUpFields />
    </AuthWrapper>
  );
};
