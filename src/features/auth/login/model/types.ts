import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

import type { BaseSyntheticEvent } from 'react';

export type Register = UseFormRegister<AuthFormValues>;
export type Errors = FieldErrors<AuthFormValues>;
export type FormControl = Control<AuthFormValues>;

export type AuthFormValues = {
  email: string;
  password: string;
  checked: boolean;
};

export type AuthLoginFormViewProps = {
  register: Register;
  errors: Errors;
  control: FormControl;
  onSubmit: (event: BaseSyntheticEvent) => Promise<void>;
};

export type AuthLoginFieldsProps = {
  register: Register;
  errors: Errors;
};
