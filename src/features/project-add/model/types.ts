import type { InputHTMLAttributes, Ref } from 'react';

export type FormFieldProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  ref?: Ref<HTMLInputElement>;
};

export type DateInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof FormFieldProps
> &
  FormFieldProps;

export type DateFormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  className?: string;
  inputProps: DateInputProps;
};
