import type {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';

import type { WithChildren, WithClassName } from '@/shared/types/types';

export type FormFieldVariant =
  'default' | 'search' | 'hover' | 'typing' | 'filed' | 'disabled' | 'error' | 'noBorder';

export type IconPosition = 'start' | 'end';

export type FormFieldProps = WithClassName & {
  id: string;
  label?: string;
  error?: string;
  variant: FormFieldVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onStartIconClick?: () => void;
  onEndIconMouseDown?: MouseEventHandler<HTMLDivElement>;
  onEndIconMouseUp?: MouseEventHandler<HTMLDivElement>;
  onEndIconMouseLeave?: MouseEventHandler<HTMLDivElement>;
  inputProps?: React.ComponentPropsWithoutRef<'input'>;
  inputRef?: React.Ref<HTMLInputElement>;
  children?: ReactNode;
};

export type FormLabelProps = WithChildren &
  WithClassName & {
    error?: string;
  } & LabelHTMLAttributes<HTMLLabelElement>;

export type FormErrorProps = WithClassName & {
  error: string;
};

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & WithClassName;

export type FormIconProps = WithChildren &
  WithClassName & {
    error?: string;
    position?: IconPosition;
    onClick?: () => void;
  } & HTMLAttributes<HTMLDivElement>;

export type DateFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  ref?: Ref<HTMLInputElement>;
};

export type FormDateFieldProps = WithClassName & {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  inputProps: DateFieldProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;
};
