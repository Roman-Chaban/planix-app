import type { LoginFormSchema } from './schema';
import type { NavigateFn } from '@types';
import type { Control } from 'react-hook-form';

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
