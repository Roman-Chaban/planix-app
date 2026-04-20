import { forwardRef, useId } from "react";

import { classNames } from "@/shared/lib/class-names";
import { Box } from "@/shared/ui/box/Box";
import { Typography } from "@/shared/ui/typography/Typography";

import styles from "./input.module.scss";

import type { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "primary",
      type,
      placeholder,
      required,
      name,
      value,
      error,
      errorMessage,
      className,
      disabled,
      startIcon,
      endIcon,
      label,
      isSeparator,
      onChange,
    },
    ref,
  ) => {
    const inputId = useId();
    const isError = Boolean(error);
    const hasStartIcon = Boolean(startIcon);
    const hasEndIcon = Boolean(endIcon);

    const wrapperClasses = classNames(
      styles.inputWrapper,
      styles[variant],
      {
        [styles.withIcon]: !!startIcon,
        [styles.withSeparator]: isSeparator && !!startIcon,
        [styles.error]: isError,
      },
      className,
    );

    return (
      <Box className={styles.wrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <Box className={wrapperClasses}>
          {hasStartIcon && (
            <Typography as="span" className={styles.startIcon}>
              {startIcon}
            </Typography>
          )}

          {isSeparator && <Typography as="span" className={styles.separator} />}

          <input
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            required={required}
            name={name}
            disabled={disabled}
            className={styles.input}
            onChange={onChange}
          />

          {hasEndIcon && (
            <Typography as="span" className={styles.endIcon}>
              {endIcon}
            </Typography>
          )}

          {error && errorMessage && (
            <Typography
              as="span"
              id={`${name}-error`}
              className={styles.errorMessage}
            >
              {errorMessage}
            </Typography>
          )}
        </Box>
      </Box>
    );
  },
);

Input.displayName = "Input";
