'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  useForgotPassword,
  registerFormFields,
} from '@/features/auth/recover-password';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import {
  AuthButton,
  AuthFooter,
  AuthHeader,
  AuthRedirect,
  AuthWrapper,
  FormFields,
} from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';
import { BackIcon } from '@/shared/ui/icons';

const { LOGIN } = ROUTES;
const { MD } = BUTTON_MAX_WIDTH;

export const ForgotForm = () => {
  const { t } = useTranslation(NS.FORGOT_PASSWORD_FORM);

  const { onSubmit, register, errors, isValid } = useForgotPassword();

  const formFieldsProps = {
    translationNamespace: NS.FORGOT_PASSWORD_FORM,
    register,
    errors,
    isValid,
  };

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
      <FormFields fields={registerFormFields} {...formFieldsProps} />

      <AuthButton label={t('button')} disabled={!isValid} maxWidth={MD} />
    </AuthWrapper>
  );
};
