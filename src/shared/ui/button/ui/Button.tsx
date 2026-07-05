import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';
import type { ButtonProps } from '@/shared/ui/button';

import { getButtonProps } from '../lib/get-button-props';

import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = (props) => {
  const { allProps, htmlProps } = getButtonProps(props);

  const {
    variant = 'default',
    size = 'compact',
    shape = 'default',
    fullWidth = false,
    fontWeight = 400,
    maxWidth = 'md',
    className,
    startIcon,
    endIcon,
    startIconClassName,
    endIconClassName,
    children,
    disabled,
    isLoading,
    onClick,
    type,
  } = allProps;

  const buttonClasses = buildClassName(
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    maxWidth && styles[`maxWidth_${maxWidth}`],
    fontWeight && styles[`fontWeight_${fontWeight}`],
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <button
      {...htmlProps}
      className={buttonClasses}
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
    >
      {startIcon && (
        <Typography
          as="span"
          className={buildClassName(styles.icon, startIconClassName)}
        >
          {startIcon}
        </Typography>
      )}

      <>
        {children}

        {endIcon && (
          <Typography
            as="span"
            className={buildClassName(styles.icon, endIconClassName)}
          >
            {endIcon}
          </Typography>
        )}
      </>
    </button>
  );
};
