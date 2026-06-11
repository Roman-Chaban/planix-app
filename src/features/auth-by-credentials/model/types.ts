import type { Control, UseFormRegisterReturn } from 'react-hook-form';

export type AuthFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type AuthFieldProps = {
  emailField: UseFormRegisterReturn;
  passwordField: UseFormRegisterReturn;
  emailError?: string;
  passwordError?: string;
};

export type LoginContentProps = {
  control: Control<AuthFormValues>;
};

export type LoginFieldsProps = AuthFieldProps;

type BaseHeaderFooterProps = {
  title: string;
};

export type LoginFooterProps = BaseHeaderFooterProps & {
  link: string;
};
