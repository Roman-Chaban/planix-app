import type { FC } from 'react';

import { ICON_POSITION } from '@/shared/constants';
import { buildClassName } from '@/shared/lib';

import { FormError, FormLabel, Box, FormIcon, Input } from '@/shared/ui';
import type { FormFieldProps } from '@/shared/ui/form-field';

import styles from './FormField.module.scss';

const { START, END } = ICON_POSITION;

export const FormField: FC<FormFieldProps> = ({
  error,
  id,
  label,
  startIcon,
  endIcon,
  onStartIconClick,
  onEndIconClick,
  inputProps,
}) => {
  const { ref: inputRef, ...restInputProps } = inputProps || {};

  return (
    <Box className={buildClassName(styles.field)}>
      <FormLabel error={error} htmlFor={id}>
        {label}
      </FormLabel>

      <Box
        className={buildClassName(styles.inputWrapper, {
          [styles.error]: !!error,
        })}
      >
        {startIcon && (
          <FormIcon error={error} position={START} onClick={onStartIconClick}>
            {startIcon}
          </FormIcon>
        )}

        <Input
          id={id}
          ref={inputRef}
          aria-invalid={!!error}
          {...restInputProps}
        />

        {endIcon && (
          <FormIcon error={error} position={END} onClick={onEndIconClick}>
            {endIcon}
          </FormIcon>
        )}
      </Box>

      <FormError error={error} />
    </Box>
  );
};
