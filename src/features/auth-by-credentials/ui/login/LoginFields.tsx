'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { usePasswordToggle } from '@/features/auth-by-credentials/lib/usePasswordToggle';
import type { LoginFieldsProps } from '@/features/auth-by-credentials/model/types';

import { FormInputField } from '@/shared/ui';
import { ViewIcon, ViewOffIcon, LockIcon, MessageIcon } from '@/shared/ui/icons';

import { INPUT_TYPES } from '@/shared/ui/input/model/constants';

const { EMAIL, PASSWORD, TEXT } = INPUT_TYPES;

export const LoginFields: FC<LoginFieldsProps> = ({
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
        }}
      />

      <FormInputField
        id="password"
        label={t('passwordLabel')}
        error={passwordError}
        startIcon={<LockIcon />}
        endIcon={isVisible ? <ViewOffIcon /> : <ViewIcon />}
        onEndIconClick={toggle}
        inputProps={{
          ...passwordField,
          type: isVisible ? TEXT : PASSWORD,
          placeholder: t('passwordPlaceholder'),
          autoComplete: 'current-password',
        }}
      />
    </>
  );
};
