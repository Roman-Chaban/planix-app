import type { LabelHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import type { IconPosition } from '@/shared/ui/input/model/types';

type FormFieldBaseProps = {
  id: string;
  error?: string;
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
  inputProps?: React.ComponentPropsWithRef<'input'>;
};

export type FormFieldProps = PropsWithChildren<{
  className?: string;
}>;

export type FormLabelProps = PropsWithChildren<
  LabelHTMLAttributes<HTMLLabelElement> & {
    error?: string;
    className?: string;
  }
>;

export type FormErrorProps = {
  error?: string;
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

export type InputFieldProps = FormFieldBaseProps;
export type FormInputFieldProps = FormFieldBaseProps;
