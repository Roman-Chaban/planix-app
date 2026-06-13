import type { LoginSchema } from './login.schema';
import type { Control } from 'react-hook-form';

export type LoginContentProps = {
  control: Control<LoginSchema>;
};

export type RegisterFormValues = {
  email: string;
  password: string;
};
