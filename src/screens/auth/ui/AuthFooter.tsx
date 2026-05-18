import type { AuthFooterProps } from '@/screens/auth/config/Auth.types';

import type { FC } from 'react';

import { Box, AppLink, Typography } from '@/shared/ui/index';
import styles from '@/screens/auth/ui/Auth.module.scss';

export const AuthFooter: FC<AuthFooterProps> = ({ title, link }) => {
  return (
    <Box className={styles.footer}>
      <Typography as="span" className={styles.text}>
        {title}
      </Typography>

      {/* TODO: [Added the correct link when it will need] */}
      <AppLink href="/#" className={styles.link}>
        {link}
      </AppLink>
    </Box>
  );
};
