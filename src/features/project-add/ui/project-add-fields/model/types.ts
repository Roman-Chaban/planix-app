import type { ChangeEvent, InputHTMLAttributes, Ref } from 'react';

export type HookFormFieldProps = {
  name: string;
  value: string;
  onChange: (value: string | ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  ref?: Ref<HTMLInputElement>;
};

export type DateInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof HookFormFieldProps
> &
  HookFormFieldProps;

export type DateFormFieldProps = {
  id: string;
  label: string;
  error?: string;
  className?: string;
  inputProps: DateInputProps;
};
