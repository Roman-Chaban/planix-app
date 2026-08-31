import type { TextareaSizes, TextareaVariants } from './constants';

import type { TextareaHTMLAttributes } from 'react';

export type TextareaProps = {
  variant?: TextareaVariants;
  size?: TextareaSizes;
  label: string;
  placeholder: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
