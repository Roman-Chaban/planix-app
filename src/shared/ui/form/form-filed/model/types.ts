import type {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  Ref,
} from 'react';

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
  onEndIconMouseDown?: MouseEventHandler<HTMLDivElement>;
  onEndIconMouseUp?: MouseEventHandler<HTMLDivElement>;
  onEndIconMouseLeave?: MouseEventHandler<HTMLDivElement>;
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
} & HTMLAttributes<HTMLDivElement>;

export type DateFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  ref?: Ref<HTMLInputElement>;
};

export type FormDateFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  className?: string;
  inputProps: DateFieldProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;
};
