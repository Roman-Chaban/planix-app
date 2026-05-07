import type { ButtonProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';

import { Box, Typography } from '@/shared/ui/index';

import styles from './styles.module.scss';

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  outline = 'primary',
  size = 'none',
  className,
  startIcon,
  endIcon,
  startIconClassName,
  endIconClassName,
  disabled,
  children,
  type,
  ...buttonProps
}) => {
  const buttonClasses = buildClassName(
    styles.button,
    styles[variant],
    styles[size],
    styles[outline],
    className,
  );

  return (
    <button className={buttonClasses} disabled={disabled} type={type} {...buttonProps}>
      {startIcon && (
        <Typography as="span" className={buildClassName(styles.icon, startIconClassName)}>
          {startIcon}
        </Typography>
      )}

      <Box className={styles.iconWrapper}>
        {children}

        {endIcon && (
          <Typography as="span" className={buildClassName(styles.icon, endIconClassName)}>
            {endIcon}
          </Typography>
        )}
      </Box>
    </button>
  );
};
