import type { Control } from 'react-hook-form';

export type LoginContentProps = {
  control: Control<RegisterFormValues>;
};

export type RegisterFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};
