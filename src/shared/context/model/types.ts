import type { InputSize, InputVariant } from '@/shared/ui/input/model/types';

export type FormContextValue = {
  id: string;
  hasError: boolean;
  error?: string;
  variant?: InputVariant;
  inputSize?: InputSize;
  disabled?: boolean;
};
