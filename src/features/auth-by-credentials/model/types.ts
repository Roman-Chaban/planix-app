import type { Control, UseFormRegisterReturn } from 'react-hook-form';

type BaseAuthFields = {
  emailField: UseFormRegisterReturn;
  passwordField: UseFormRegisterReturn;
  emailError?: string;
  passwordError?: string;
};

export type AuthFormValues = {
  email: string;
  password: string;
  checked: boolean;
};

export type LoginFormMainProps = {
  control: Control<AuthFormValues>;
};

export type LoginFormFieldsProps = BaseAuthFields;
