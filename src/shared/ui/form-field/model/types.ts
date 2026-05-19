import type { InputHTMLAttributes, LabelHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import type { IconPosition, InputSize, InputVariant } from '@/shared/ui/input/model/types';

export type FormFieldProps = PropsWithChildren<{
  className?: string;
}>;

export type FormLabelProps = {
  className?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

export type FormWrapperProps = PropsWithChildren<{
  className?: string;
  variant?: InputVariant;
  error?: string | null;
}>;

export type FormErrorProps = {
  className?: string;
  error?: string | null;
};

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  inputSize?: InputSize;
};

export type FormIconProps = {
  children: ReactNode;
  position?: IconPosition;
  onClick?: () => void;
  className?: string;
};
