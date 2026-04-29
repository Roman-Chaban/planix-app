import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputVariant = 'primary' | 'typing' | 'filed' | 'error';

export type InputTypes = 'email' | 'tel' | 'password' | 'radio' | 'search' | 'hidden' | 'checkbox';

export type IsPasswordToggleable = boolean;

export type InputProps = {
  variant?: InputVariant;
  inputSize?: InputSize;
  error?: string;
  errorMessage?: string;
  disabled?: boolean;
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isDivider?: boolean;
  isPasswordToggleable?: boolean;
  onEndIconClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;
