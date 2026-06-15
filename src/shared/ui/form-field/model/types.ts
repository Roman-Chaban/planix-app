import type { LabelHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import type { IconPosition } from '@/shared/ui/input/model/types';

export type FormFieldProps = {
  id: string;
  error?: string;
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
  filedProps?: React.ComponentPropsWithRef<'input'>;
  children?: ReactNode;
};

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
