import { Box } from '@/shared/ui';

import type { AuthWrapperProps } from '@/shared/ui/auth/ui/auth-wrapper';

import styles from './auth-wrapper.module.scss';

export const AuthWrapper = ({ children, header, footer }: AuthWrapperProps) => {
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
