import { forwardRef, useId } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Box, Typography } from '@/shared/ui/index';
import type { InputProps } from '@/shared/ui/input/model/types';

import styles from './styles.module.scss';

export const InputRoot = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'primary',
      type,
      label,
      error,
      errorMessage,
      className,
      startIcon,
      endIcon,
      onEndIconClick,
      isDivider,
      ...inputProps
    },
    ref,
  ) => {
    const id = useId();
    const hasError = Boolean(error);

    const rootClassname = classNames(
      styles.inputWrapper,
      styles[variant],
      { [styles.error]: hasError },
      className,
    );

    return (
      <Box className={styles.wrapper}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <Box className={rootClassname}>
          {startIcon && (
            <Typography as="span" className={styles.slotStart}>
              {startIcon}
            </Typography>
          )}

          {isDivider && <Typography as="span" className={styles.divider} />}

          <input id={id} ref={ref} className={styles.input} type={type} {...inputProps} />

          {endIcon && (
            <Typography as="span" className={styles.slotEnd} onClick={onEndIconClick}>
              {endIcon}
            </Typography>
          )}

          {error && errorMessage && (
            <Typography className={styles.errorText}>{errorMessage}</Typography>
          )}
        </Box>
      </Box>
    );
  },
);

InputRoot.displayName = 'InputRoot';
