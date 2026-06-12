'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { AuthFooter, AuthHeader, AuthRedirect, AuthWrapper } from '@/shared/ui';
import { BackIcon } from '@/shared/ui/icons';

const { LOGIN } = ROUTES;

export const ForgotForm = () => {
  const { t } = useTranslation('forgotPasswordForm');
  return (
    <AuthWrapper
      header={<AuthHeader title={t('title')} subtitle={t('subtitle')} />}
      footer={
        <AuthFooter>
          <AuthRedirect
            title={t('backTitle')}
            linkText={t('backLink')}
            href={LOGIN}
            icon={<BackIcon />}
          />
        </AuthFooter>
      }
    ></AuthWrapper>
  );
};
