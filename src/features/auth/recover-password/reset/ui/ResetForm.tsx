'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { AuthStep } from '@/features/auth/stepper';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import { resetFormFields } from '../lib/form-config';
import { useResetPassword } from '../model/useResetPassword';

const { XL } = BUTTON_MAX_WIDTH;

type ResetFormProps = {
  onNavigate: (step: AuthStep) => void;
};

export const ResetForm: FC<ResetFormProps> = ({ onNavigate }) => {
  const { t } = useTranslation(NS.AUTH);
  const { resetForm, isValid, isSubmitting, handleSubmit } =
    useResetPassword(onNavigate);

  const isSubmitDisabled = !isValid || isSubmitting;

  return (
    <AppForm form={resetForm} onSubmit={handleSubmit}>
      <FormFields fields={resetFormFields} translationNamespace={NS.AUTH} />

      <AuthButton
        label={t('reset.resetPasswordButton')}
        maxWidth={XL}
        disabled={isSubmitDisabled}
      />
    </AppForm>
  );
};
