import type { AuthFooterProps } from '../model/types';

import { Box } from '@/shared/ui';

import styles from './auth-footer.module.scss';

export const AuthFooter = ({ children }: AuthFooterProps) => {
  return <Box className={styles.footer}>{children}</Box>;
};
