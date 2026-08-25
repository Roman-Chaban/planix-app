'use client';

import type { NavigateFn } from '@types';

import { useTranslation } from 'react-i18next';

import { PasswordForm } from '@/features/auth/password';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AuthButton } from '@/shared/ui';

import { resetFormFields } from '../lib/reset-fields';
import { useResetPassword } from '../model/useResetPassword';

import styles from './ResetForm.module.scss';

type ResetFormProps = {
  onNavigate: NavigateFn;
};

export const ResetForm = ({ onNavigate }: ResetFormProps) => {
  const { t } = useTranslation(NS.AUTH);
  const { resetForm, isSubmitDisabled, isSubmitting, handleSubmit } = useResetPassword(onNavigate);

  return (
    <PasswordForm
      form={resetForm}
      onSubmit={handleSubmit}
      fields={resetFormFields}
      translationNamespace={NS.AUTH}
      className={styles.resetForm}
    >
      <AuthButton
        preset="AUTH_FORGOT_SEND"
        label={t('reset.resetPasswordButton')}
        disabled={isSubmitDisabled}
        isLoading={isSubmitting}
      />
    </PasswordForm>
  );
};
