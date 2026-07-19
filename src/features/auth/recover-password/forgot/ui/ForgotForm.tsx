'use client';

import type { ForgotFormProps } from '../model/forgot.types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';

import { registerFormFields } from '../lib/form-config';
import { useForgotPassword } from '../model/useForgotPassword';

import styles from './ForgotForm.module.scss';

export const ForgotForm = ({ onEmailSent }: ForgotFormProps) => {
  const { t } = useTranslation(NS.AUTH);

  const { forgotForm, isSubmitting, isSubmitDisabled, handleSubmit } = useForgotPassword({
    onEmailSent,
  });

  return (
    <AppForm form={forgotForm} onSubmit={handleSubmit} className={styles.forgotForm}>
      <FormFields fields={registerFormFields} translationNamespace={NS.AUTH} />

      <AuthButton
        label={t('forgot.button')}
        disabled={isSubmitDisabled}
        preset="AUTH_FORGOT_SEND"
        isLoading={isSubmitting}
      />
    </AppForm>
  );
};
