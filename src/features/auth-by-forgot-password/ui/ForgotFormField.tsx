'use client';

import { useTranslation } from 'react-i18next';

import { useForgotPassword } from '@/features/auth-by-forgot-password';
import { AuthButton, FormInputField } from '@/shared/ui';
import { MessageIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { EMAIL } = INPUT_TYPES;

export const ForgotFormField = () => {
  const { t } = useTranslation('forgotPasswordForm');

  const { register, errors, isValid } = useForgotPassword();
  return (
    <>
      <FormInputField
        id="email"
        label={t('emailLabel')}
        error={errors.email?.message}
        inputProps={{
          type: EMAIL,
          placeholder: t('emailPlaceholder'),
          ...register('email'),
        }}
        startIcon={<MessageIcon />}
      />

      <AuthButton label={t('button')} disabled={!isValid} maxWidth={7.75} />
    </>
  );
};
