import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import {
  FormError,
  FormLabel,
  Box,
  FormIcon,
  Input,
  Typography,
} from '@/shared/ui';

import {
  type FormFieldProps,
  ICON_POSITION,
} from '@/shared/ui/form/form-filed';

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
  onEndIconMouseDown,
  onEndIconMouseLeave,
  onEndIconMouseUp,
  inputProps,
  inputRef,
  children,
}) => {
  const { placeholder, required, value, ...restInputProps } = inputProps || {};

  const isFilled =
    value !== undefined && value !== null && String(value).length > 0;

  const wrapperClassName = buildClassName(styles.inputWrapper, {
    [styles.error]: !!error,
    [styles[variant]]: !!variant,
    [styles.filled]: isFilled,
    [styles.withStartIcon]: !!startIcon,
    [styles.withEndIcon]: !!endIcon,
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
          value={value ?? ''}
          {...restInputProps}
          placeholder=""
        />

        {placeholder && (
          <Typography as="span" className={styles.floatingLabel}>
            {placeholder}
            {required && (
              <Typography as="span" className={styles.required}>
                *
              </Typography>
            )}
          </Typography>
        )}

        {endIcon && (
          <FormIcon
            position={END}
            onMouseDown={onEndIconMouseDown}
            onMouseUp={onEndIconMouseUp}
            onMouseLeave={onEndIconMouseLeave}
          >
            {endIcon}
          </FormIcon>
        )}
      </Box>

      {error && <FormError error={error} />}
      {children}
    </Box>
  );
};
