import type { FormFieldSizes, FormFieldVariants, IconPosition } from './constants';
import type { WithChildren, WithClassName } from '@types';

import type {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';

export type FormFieldProps = {
  id: string;
  label?: string;
  error?: string;
  variant?: FormFieldVariants;
  size?: FormFieldSizes;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  inputProps?: FormInputProps;
  inputRef?: Ref<HTMLInputElement>;
  onStartIconClick?: () => void;
  onEndIconMouseDown?: MouseEventHandler<HTMLDivElement>;
  onEndIconMouseUp?: MouseEventHandler<HTMLDivElement>;
  onEndIconMouseLeave?: MouseEventHandler<HTMLDivElement>;
} & WithChildren &
  WithClassName;

export type FormLabelProps = {
  error?: string;
} & WithChildren &
  WithClassName &
  LabelHTMLAttributes<HTMLLabelElement>;

export type FormErrorProps = {
  error: string;
} & WithClassName;

export type FormInputProps = WithClassName & InputHTMLAttributes<HTMLInputElement>;

export type FormIconProps = {
  error?: string;
  position?: IconPosition;
  onClick?: () => void;
} & WithChildren &
  WithClassName &
  HTMLAttributes<HTMLDivElement>;

export type DateInputProps = {
  value?: string | null;
  ref?: Ref<HTMLInputElement>;
  onChange: (value: string) => void;
};

export type FormDateFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  size?: FormFieldSizes;
  inputProps: DateInputProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;
} & WithClassName;
