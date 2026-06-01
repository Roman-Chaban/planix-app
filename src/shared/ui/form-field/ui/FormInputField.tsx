import type { FC } from 'react';

import {
  FormError,
  FormField,
  FormLabel,
  InputField,
  type FormInputFieldProps,
} from '@/shared/ui/form-field';

export const FormInputField: FC<FormInputFieldProps> = ({
  id,
  label,
  error,
  inputProps,
  startIcon,
  endIcon,
  onStartIconClick,
  onEndIconClick,
  className,
}) => {
  return (
    <FormField>
      <FormLabel error={error} htmlFor={id}>
        {label}
      </FormLabel>

      <InputField
        className={className}
        id={id}
        error={error}
        startIcon={startIcon}
        endIcon={endIcon}
        onStartIconClick={onStartIconClick}
        onEndIconClick={onEndIconClick}
        inputProps={{
          ...inputProps,
          'aria-invalid': !!error,
        }}
      />

      <FormError error={error} />
    </FormField>
  );
};
