import { Box } from '@/shared/ui';
import type { AuthFooterProps } from '@/shared/ui/auth/ui/auth-footer';

import styles from './AuthFooter.module.scss';

export const AuthFooter = ({ children }: AuthFooterProps) => {
  return <Box className={styles.footer}>{children}</Box>;
};
