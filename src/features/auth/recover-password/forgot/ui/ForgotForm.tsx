'use client';

import type { NavigateFn } from '@types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';

import { registerFormFields } from '../lib/form-config';
import { useForgotPassword } from '../model/useForgotPassword';

import styles from './ForgotForm.module.scss';

type ForgotFormProps = {
  onNavigate: NavigateFn;
};

export const ForgotForm = ({ onNavigate }: ForgotFormProps) => {
  const { t } = useTranslation(NS.AUTH);

  const { isValid, forgotForm, handleSubmit } = useForgotPassword(onNavigate);

  return (
    <AppForm form={forgotForm} onSubmit={handleSubmit} className={styles.forgotForm}>
      <FormFields fields={registerFormFields} translationNamespace={NS.AUTH} />

      <AuthButton label={t('forgot.button')} disabled={!isValid} preset="AUTH_FORGOT_SEND" />
    </AppForm>
  );
};
