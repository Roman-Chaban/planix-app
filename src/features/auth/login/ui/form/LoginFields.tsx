'use client';

import { useTranslation } from 'react-i18next';

import { useLogin, usePasswordToggle } from '@/features/auth/login';

import { FormInputField } from '@/shared/ui';
import {
  ViewIcon,
  ViewOffIcon,
  LockIcon,
  MessageIcon,
} from '@/shared/ui/icons';

import { INPUT_TYPES } from '@/shared/ui/input/model/constants';

const { EMAIL, PASSWORD, TEXT } = INPUT_TYPES;

export const LoginFields = () => {
  const { t } = useTranslation('login');

  const { isVisible, toggle } = usePasswordToggle();

  const { register, errors } = useLogin();

  return (
    <>
      <FormInputField
        id="email"
        label={t('emailLabel')}
        error={errors.email?.message}
        startIcon={<MessageIcon />}
        inputProps={{
          type: EMAIL,
          ...register('email'),
          placeholder: t('emailPlaceholder'),
          autoComplete: 'email',
        }}
      />

      <FormInputField
        id="password"
        label={t('passwordLabel')}
        error={errors.password?.message}
        startIcon={<LockIcon />}
        endIcon={isVisible ? <ViewOffIcon /> : <ViewIcon />}
        onEndIconClick={toggle}
        inputProps={{
          ...register('password'),
          type: isVisible ? TEXT : PASSWORD,
          placeholder: t('passwordPlaceholder'),
          autoComplete: 'current-password',
        }}
      />
    </>
  );
};
