'use client';

import { useTranslation } from 'react-i18next';

import { useForgotPassword } from '@/features/auth/recover-password';
import { AuthButton, FormInputField } from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';
import { MessageIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { EMAIL } = INPUT_TYPES;
const { MD } = BUTTON_MAX_WIDTH;

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

      <AuthButton label={t('button')} disabled={!isValid} maxWidth={MD} />
    </>
  );
};
