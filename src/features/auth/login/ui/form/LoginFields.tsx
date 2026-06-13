'use client';

import { loginFormFields, useLogin } from '@/features/auth/login';

import { FormFields } from '@/shared/ui';

export const LoginFields = () => {
  const { register, errors, isValid } = useLogin();

  const formFieldsProps = {
    translationNamespace: 'login',
    register,
    errors,
    isValid,
  };

  return <FormFields fields={loginFormFields} {...formFieldsProps} />;
};
