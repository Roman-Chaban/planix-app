'use client';

import type { ForgotFormProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';

import { forgotFormFields } from '../lib/config';
import { useForgotPassword } from '../model/use-forgot-password';

import styles from './forgot-form.module.scss';

export const ForgotForm = ({ onEmailSent }: ForgotFormProps) => {
  const { t } = useTranslation(NS.AUTH);

  const { forgotForm, isSubmitting, isSubmitDisabled, handleSubmit } = useForgotPassword({
    onEmailSent,
  });

  return (
    <AppForm form={forgotForm} onSubmit={handleSubmit} className={styles.forgotForm}>
      <FormFields fields={forgotFormFields} translationNamespace={NS.AUTH} />

      <AuthButton
        label={t('forgot.button')}
        disabled={isSubmitDisabled}
        preset="AUTH_FORGOT_SEND"
        isLoading={isSubmitting}
      />
    </AppForm>
  );
};
