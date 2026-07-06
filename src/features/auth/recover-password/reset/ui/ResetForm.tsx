'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import type { NavigateFn } from '@/shared/types/types';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';

import { resetFormFields } from '../lib/form-config';
import { useResetPassword } from '../model/useResetPassword';

type ResetFormProps = {
  onNavigate: NavigateFn;
};

export const ResetForm = ({ onNavigate }: ResetFormProps) => {
  const { t } = useTranslation(NS.AUTH);
  const { resetForm, isValid, isSubmitting, handleSubmit } = useResetPassword(onNavigate);

  const isSubmitDisabled = !isValid || isSubmitting;

  return (
    <AppForm form={resetForm} onSubmit={handleSubmit}>
      <FormFields fields={resetFormFields} translationNamespace={NS.AUTH} />

      <AuthButton
        preset="AUTH_FORGOT_SEND"
        label={t('reset.resetPasswordButton')}
        disabled={isSubmitDisabled}
      />
    </AppForm>
  );
};
