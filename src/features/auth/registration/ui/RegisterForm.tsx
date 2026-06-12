'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { RegisterFormFields } from '@/features/auth/registration';
import { AuthFooter, AuthHeader, AuthRedirect } from '@/shared/ui';
import { AuthWrapper } from '@/shared/ui/auth-wrapper';

const { REGISTER } = ROUTES;

export const RegisterForm = () => {
  const { t } = useTranslation('signUpForm');

  return (
    <AuthWrapper
      header={
        <AuthHeader
          title={t('title')}
          subtitle={t('subtitle')}
          isHighlightedIcon
        />
      }
      footer={
        <AuthFooter>
          <AuthRedirect
            title={t('noAccount')}
            linkText={t('registration')}
            href={REGISTER}
          />
        </AuthFooter>
      }
    >
      <RegisterFormFields />
    </AuthWrapper>
  );
};
