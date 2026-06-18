import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { FormError, FormLabel, Box, FormIcon, Input } from '@/shared/ui';

import type { FormFieldProps } from '@/shared/ui/form/form-filed';
import { ICON_POSITION } from '@/shared/ui/input';

import styles from './FormField.module.scss';

const { START, END } = ICON_POSITION;

export const FormField: FC<FormFieldProps> = ({
  id,
  label,
  error,
  variant,
  startIcon,
  endIcon,
  onStartIconClick,
  onEndIconClick,
  inputProps,
  inputRef,
  children,
}) => {
  const { ...restInputProps } = inputProps || {};

  const wrapperClassName = buildClassName(styles.inputWrapper, {
    [styles.error]: !!error,
    [styles[variant]]: !!variant,
  });

  return (
    <Box className={styles.field}>
      {label && (
        <FormLabel error={error} htmlFor={id}>
          {label}
        </FormLabel>
      )}

      <Box className={wrapperClassName}>
        {startIcon && (
          <FormIcon position={START} onClick={onStartIconClick}>
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
          <FormIcon position={END} onClick={onEndIconClick}>
            {endIcon}
          </FormIcon>
        )}
      </Box>

      {error && <FormError error={error} />}
      {children}
    </Box>
  );
};
