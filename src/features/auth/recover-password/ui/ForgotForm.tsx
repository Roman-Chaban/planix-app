'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  registerFormFields,
  useForgotPassword,
} from '@/features/auth/recover-password';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import {
  AppForm,
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
  const { isValid, form, onSubmit } = useForgotPassword();

  const header = <AuthHeader title={t('title')} subtitle={t('subtitle')} />;

  const footer = (
    <AuthFooter>
      <AuthRedirect
        title={t('backTitle')}
        linkText={t('backLink')}
        href={LOGIN}
        icon={<BackIcon />}
      />
    </AuthFooter>
  );

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <AuthWrapper header={header} footer={footer}>
        <FormFields
          fields={registerFormFields}
          translationNamespace={NS.FORGOT_PASSWORD_FORM}
        />

        <AuthButton label={t('button')} disabled={!isValid} maxWidth={MD} />
      </AuthWrapper>
    </AppForm>
  );
};
