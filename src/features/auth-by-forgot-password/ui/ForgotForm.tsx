'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  useForgotPassword,
  ForgotFormField,
} from '@/features/auth-by-forgot-password';
import { AuthFooter, AuthHeader, AuthRedirect, AuthWrapper } from '@/shared/ui';
import { BackIcon } from '@/shared/ui/icons';

const { LOGIN } = ROUTES;

export const ForgotForm = () => {
  const { t } = useTranslation('forgotPasswordForm');

  const { onSubmit } = useForgotPassword();

  return (
    <AuthWrapper
      onSubmit={onSubmit}
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
    >
      <ForgotFormField />
    </AuthWrapper>
  );
};
