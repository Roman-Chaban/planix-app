import type { ClassName } from '@types';

import type { ReactNode } from 'react';

import type { Locale } from '@/shared/config/locales/locales';
import type { InputSize, InputVariant } from '@/shared/ui/input/input.types';

export type BasedProviderProps = {
  children: ReactNode;
  locale: Locale;
};

export type FormProviderProps = {
  children: ReactNode;
  error?: string;
  variant?: InputVariant;
  inputSize?: InputSize;
  disabled?: boolean;
  className?: ClassName;
};
