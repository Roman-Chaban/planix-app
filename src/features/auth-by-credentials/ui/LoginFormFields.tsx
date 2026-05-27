'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { LoginFormFieldsProps } from '@/features/auth-by-credentials/model/types';
import { usePasswordToggle } from '@/features/auth-by-credentials/model/usePasswordToggle';

import { FormInputField } from '@/shared/ui';
import { EyeIcon, EyeOffIcon, LockIcon, MessageIcon } from '@/shared/ui/icons';

import { INPUT_TYPES } from '@/shared/ui/input/model/constants';

const { EMAIL, PASSWORD, TEXT } = INPUT_TYPES;

export const LoginFormFields: FC<LoginFormFieldsProps> = ({
  emailField,
  passwordField,
  emailError,
  passwordError,
}) => {
  const { t } = useTranslation('login');

  const { isVisible, toggle } = usePasswordToggle();

  return (
    <>
      <FormInputField
        id="email"
        label={t('emailLabel')}
        error={emailError}
        startIcon={<MessageIcon />}
        inputProps={{
          ...emailField,
          type: EMAIL,
          placeholder: t('emailPlaceholder'),
          autoComplete: 'email',
          'aria-invalid': !!emailError,
        }}
      />

      <FormInputField
        id="password"
        label={t('passwordLabel')}
        error={passwordError}
        startIcon={<LockIcon />}
        endIcon={isVisible ? <EyeOffIcon /> : <EyeIcon />}
        onEndIconClick={toggle}
        inputProps={{
          ...passwordField,
          type: isVisible ? TEXT : PASSWORD,
          placeholder: t('passwordPlaceholder'),
          autoComplete: 'current-password',
          'aria-invalid': !!passwordError,
        }}
      />
    </>
  );
};
