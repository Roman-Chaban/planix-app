import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import type { ButtonProps } from '@/shared/ui/button/model/types';

import styles from '@/shared/ui/button/styles/button.module.scss';
import { Box, Typography } from '@/shared/ui/index';

export const Button: FC<ButtonProps> = ({
  variant = '',
  size = 'compact',
  className,
  startIcon,
  endIcon,
  startIconClassName,
  endIconClassName,
  disabled,
  children,
  type,
  onClick,
}) => {
  const buttonClasses = buildClassName(styles.button, styles[variant], styles[size], className);

  return (
    <button className={buttonClasses} disabled={disabled} type={type} onClick={onClick}>
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
