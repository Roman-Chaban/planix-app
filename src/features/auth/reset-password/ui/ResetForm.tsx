'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  resetFormFields,
  useResetPassword,
} from '@/features/auth/reset-password';
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
const { XL } = BUTTON_MAX_WIDTH;

export const ResetForm = () => {
  const { t } = useTranslation(NS.RESET_PASSWORD_FORM);
  const { form, onSubmit, isValid, isSubmitting } = useResetPassword();

  const isSubmitDisabled = !isValid || isSubmitting;

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
          fields={resetFormFields}
          translationNamespace={NS.RESET_PASSWORD_FORM}
        />

        <AuthButton
          label={t('resetPasswordButton')}
          maxWidth={XL}
          disabled={isSubmitDisabled}
        />
      </AuthWrapper>
    </AppForm>
  );
};
