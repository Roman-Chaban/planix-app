'use client';

import { useTranslation } from 'react-i18next';

import {
  resetFormFields,
  useResetPassword,
} from '@/features/auth/reset-password';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

const { XL } = BUTTON_MAX_WIDTH;

export const ResetForm = () => {
  const { t } = useTranslation(NS.AUTH);
  const { form, onSubmit, isValid, isSubmitting } = useResetPassword();

  const isSubmitDisabled = !isValid || isSubmitting;

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormFields fields={resetFormFields} translationNamespace={NS.AUTH} />

      <AuthButton
        label={t('resetPasswordButton')}
        maxWidth={XL}
        disabled={isSubmitDisabled}
      />
    </AppForm>
  );
};
