import type { Control } from 'react-hook-form';

import type { LoginFormSchema } from '@/features/auth/login';

export type LoginContentProps = {
  control: Control<LoginFormSchema>;
  rememberMeLabel: string;
  forgotPasswordLabel: string;
  submitLabel: string;
  isValid: boolean;
};
