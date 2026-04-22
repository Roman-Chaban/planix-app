import { forwardRef, useId } from "react";
import { classNames } from "@/shared/lib/helpers/class-names";
import { Box } from "@/shared/ui/box/Box";
import { Typography } from "@/shared/ui/typography/Typography";
import styles from "./input.module.scss";

import type { InputProps } from "@/shared/ui/input/model/input.types";

export const InputRoot = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "primary",
      type,
      label,
      error,
      errorMessage,
      className,
      startIcon,
      endIcon,
      onEndIconClick,
      isSeparator,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const hasError = Boolean(error);

    return (
      <Box className={styles.wrapper}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <Box
          className={classNames(
            styles.inputWrapper,
            styles[variant],
            { [styles.error]: hasError },
            className,
          )}
        >
          {startIcon && (
            <Typography as="span" className={styles.startIcon}>
              {startIcon}
            </Typography>
          )}

          {isSeparator && <Typography as="span" className={styles.separator} />}

          <input
            id={id}
            ref={ref}
            className={styles.input}
            type={type}
            {...props}
          />

          {endIcon && (
            <Typography
              as="span"
              className={styles.endIcon}
              onClick={onEndIconClick}
            >
              {endIcon}
            </Typography>
          )}

          {error && errorMessage && (
            <Typography className={styles.errorMessage}>
              {errorMessage}
            </Typography>
          )}
        </Box>
      </Box>
    );
  },
);

InputRoot.displayName = "InputRoot";
