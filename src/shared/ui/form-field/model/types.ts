import type { ClassName } from '@types';

import type { PropsWithChildren, ReactNode } from 'react';

import type { InputVariant, InputSize, IconPosition } from '@/shared/ui/input/model/types';

type BaseProps = PropsWithChildren<{
  className?: ClassName;
}>;

export type FormFieldProps = BaseProps & {
  error?: string;
  variant?: InputVariant;
  inputSize?: InputSize;
  disabled?: boolean;
};

export type FormInputWrapperProps = BaseProps;

export type FormLabelProps = BaseProps;

export type FormIconProps = {
  children: ReactNode;
  position?: IconPosition;
  onClick?: () => void;
  className?: ClassName;
};
