'use client';

import { useTranslation } from 'react-i18next';

import {
  registerFormFields,
  useForgotPassword,
} from '@/features/auth/recover-password';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

const { MD } = BUTTON_MAX_WIDTH;

export const ForgotForm = () => {
  const { t } = useTranslation(NS.AUTH);
  const { isValid, form, onSubmit } = useForgotPassword();

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormFields fields={registerFormFields} translationNamespace={NS.AUTH} />

      <AuthButton
        label={t('forgot.button')}
        disabled={!isValid}
        maxWidth={MD}
      />
    </AppForm>
  );
};
