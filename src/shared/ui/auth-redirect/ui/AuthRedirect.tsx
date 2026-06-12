import type { FC } from 'react';

import { AppLink, Box, Typography } from '@/shared/ui';
import type { AuthRedirectProps } from '@/shared/ui/auth-redirect';

import styles from './AuthRedirect.module.scss';

export const AuthRedirect: FC<AuthRedirectProps> = ({ title, linkText, href, icon }) => (
  <Box className={styles.box}>
    {icon && icon}
    <Typography as="span" className={styles.text}>
      {title}
    </Typography>
    <AppLink href={href} className={styles.link}>
      {linkText}
    </AppLink>
  </Box>
);
