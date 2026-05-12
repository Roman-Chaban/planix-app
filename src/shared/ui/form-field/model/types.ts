import type { ClassName } from '@types';

import type { InputHTMLAttributes, LabelHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import type { IconPosition, InputSize, InputVariant } from '@/shared/ui/input/model/types';

export type FormFieldProps = PropsWithChildren<{
  className?: ClassName;
}>;

export type FormLabelProps = {
  className?: ClassName;
} & LabelHTMLAttributes<HTMLLabelElement>;

export type FormWrapperProps = PropsWithChildren<{
  className?: ClassName;
  variant?: InputVariant;
  error?: string | null;
}>;

export type FormErrorProps = {
  className?: ClassName;
  error?: string | null;
};

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: ClassName;
  inputSize?: InputSize;
};

export type FormIconProps = {
  children: ReactNode;
  position?: IconPosition;
  onClick?: () => void;
  className?: ClassName;
};
