import type { Control, UseFormRegisterReturn } from 'react-hook-form';

import type { ReactNode } from 'react';

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

export type LoginHeaderProps = BaseHeaderFooterProps & {
  highlightedText?: string;
  subtitle?: string;
  icon?: ReactNode;
};

export type LoginFooterProps = BaseHeaderFooterProps & {
  link: string;
};
