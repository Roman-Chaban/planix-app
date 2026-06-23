'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  registerFormFields,
  useForgotPassword,
} from '@/features/auth/recover-password/forgot';
import type { AuthStep } from '@/features/auth/stepper';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AppForm, AuthButton, FormFields } from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

const { MD } = BUTTON_MAX_WIDTH;

type ForgotFormProps = {
  onNavigate: (step: AuthStep) => void;
};

export const ForgotForm: FC<ForgotFormProps> = ({ onNavigate }) => {
  const { t } = useTranslation(NS.AUTH);
  const { isValid, form, onSubmit } = useForgotPassword(onNavigate);

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
