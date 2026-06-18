import type { FC } from 'react';

import { Box } from '@/shared/ui';

import type { AuthWrapperProps } from '@/shared/ui/auth-wrapper';

import styles from './AuthWrapper.module.scss';

export const AuthWrapper: FC<AuthWrapperProps> = ({
  children,
  header,
  footer,
}) => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.content}>
        {header}

        <Box className={styles.form}>{children}</Box>
      </Box>

      {footer}
    </Box>
  );
};
