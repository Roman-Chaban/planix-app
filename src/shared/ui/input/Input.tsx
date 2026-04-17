import { forwardRef } from "react";
import type { InputProps } from "./types";
import { classNames } from "@/shared/lib/class-names";

import styles from "./input.module.scss";

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
      icon,
      isSeparator,
      onChange,
    },
    ref,
  ) => {
    const isError = Boolean(error);

    const wrapperClasses = classNames(
      styles.inputWrapper,
      styles[variant],
      {
        [styles.withIcon]: !!icon,
        [styles.withSeparator]: isSeparator && !!icon,
        [styles.error]: isError,
      },
      className,
    );

    const hasIcon = Boolean(icon);

    return (
      <div className={wrapperClasses}>
        {hasIcon && <span className={styles.iconWrapper}>{icon}</span>}

        {isSeparator && <span className={styles.separator} />}

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

        {error && errorMessage && (
          <span id={`${name}-error`} className={styles.errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
