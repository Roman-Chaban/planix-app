import type { FC } from 'react';

import { Box } from '@/shared/ui';
import type { AuthFooterProps } from '@/shared/ui/auth-footer';

import styles from './AuthFooter.module.scss';

export const AuthFooter: FC<AuthFooterProps> = ({ children }) => {
  return <Box className={styles.footer}>{children}</Box>;
};
