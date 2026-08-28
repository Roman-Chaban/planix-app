import type { TextareaVariants } from './constants';

import type { TextareaHTMLAttributes } from 'react';

export type TextareaProps = {
  variant?: TextareaVariants;
  label: string;
  textareaClassName?: string;
  labelClassName?: string;
  placeholder: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
