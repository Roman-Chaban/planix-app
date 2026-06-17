import type { LabelHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export type FormFieldVariant =
  | 'default'
  | 'search'
  | 'hover'
  | 'typing'
  | 'filed'
  | 'disabled'
  | 'error'
  | 'noBorder';

export type IconPosition = 'start' | 'end';

export type FormFieldProps = {
  id: string;
  label?: string;
  error?: string;
  variant: FormFieldVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
  inputProps?: React.ComponentPropsWithoutRef<'input'>;
  inputRef?: React.Ref<HTMLInputElement>;
  children?: ReactNode;
};

export type FormLabelProps = PropsWithChildren<
  LabelHTMLAttributes<HTMLLabelElement> & {
    error?: string;
    className?: string;
  }
>;

export type FormErrorProps = {
  error: string;
  className?: string;
};

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export type FormIconProps = {
  error?: string;
  children: ReactNode;
  position?: IconPosition;
  onClick?: () => void;
  className?: string;
};
