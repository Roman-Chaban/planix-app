'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { AuthStep } from '@/features/auth/stepper';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import { registerFormFields } from '../lib/form-config';
import { useForgotPassword } from '../model/useForgotPassword';

const { MD } = BUTTON_MAX_WIDTH;

type ForgotFormProps = {
  onNavigate: (step: AuthStep) => void;
};

export const ForgotForm: FC<ForgotFormProps> = ({ onNavigate }) => {
  const { t } = useTranslation(NS.AUTH);

  const { isValid, forgotForm, handleSubmit } = useForgotPassword(onNavigate);

  return (
    <AppForm form={forgotForm} onSubmit={handleSubmit}>
      <FormFields fields={registerFormFields} translationNamespace={NS.AUTH} />

      <AuthButton
        label={t('forgot.button')}
        disabled={!isValid}
        maxWidth={MD}
      />
    </AppForm>
  );
};
