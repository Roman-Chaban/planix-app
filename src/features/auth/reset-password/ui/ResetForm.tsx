'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  resetFormFields,
  useResetPassword,
} from '@/features/auth/reset-password';
import type { AuthStep } from '@/features/auth/stepper';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

const { XL } = BUTTON_MAX_WIDTH;

type ResetFormProps = {
  onNavigate: (step: AuthStep) => void;
};

export const ResetForm: FC<ResetFormProps> = ({ onNavigate }) => {
  const { t } = useTranslation(NS.AUTH);
  const { form, onSubmit, isValid, isSubmitting } =
    useResetPassword(onNavigate);

  const isSubmitDisabled = !isValid || isSubmitting;

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormFields fields={resetFormFields} translationNamespace={NS.AUTH} />

      <AuthButton
        label={t('reset.resetPasswordButton')}
        maxWidth={XL}
        disabled={isSubmitDisabled}
      />
    </AppForm>
  );
};
