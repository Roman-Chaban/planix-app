import type { TextareaHTMLAttributes } from 'react';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  textareaClassName?: string;
  labelClassName?: string;
  placeholder: string;
};
