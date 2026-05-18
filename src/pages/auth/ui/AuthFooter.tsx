import type { FC } from 'react';

import type { AuthFooterProps } from '@/pages/auth/config/Auth.types';

import styles from '@/pages/auth/ui/Auth.module.scss';
import { Box, AppLink, Typography } from '@/shared/ui/index';

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
