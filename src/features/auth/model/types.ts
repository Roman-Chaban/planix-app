import type { Control, UseFormRegisterReturn } from 'react-hook-form';

export type AuthFormValues = {
  email: string;
  password: string;
  checked: boolean;
};

export type AuthLoginFormViewProps = {
  onSubmit: VoidFunction;
  emailField: UseFormRegisterReturn;
  passwordField: UseFormRegisterReturn;
  emailError?: string;
  passwordError?: string;
  control: Control<AuthFormValues>;
};

export type AuthLoginFieldsProps = {
  emailField: UseFormRegisterReturn;
  passwordField: UseFormRegisterReturn;
  emailError?: string;
  passwordError?: string;
};
