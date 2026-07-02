import type { LoginFormSchema } from './schema';
import type { Control } from 'react-hook-form';

import type { NavigateFn } from '@/shared/types/types';

export type LoginActionsProps = {
  control: Control<LoginFormSchema>;
  rememberMeLabel: string;
  forgotPasswordLabel: string;
  submitLabel: string;
  isValid: boolean;
  isLoading?: boolean;
  onForgotPassword?: () => void;
};

export type LoginFormProps = { onNavigate: NavigateFn };
