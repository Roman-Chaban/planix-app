import type { FC } from 'react';

import { ROUTES } from '@/app/routes';
import type { LoginFooterProps } from '@/features/auth-by-credentials';

import { Box, AppLink, Typography } from '@/shared/ui';

import styles from './LoginForm.module.scss';

const { SIGN_UP } = ROUTES;

export const LoginFooter: FC<LoginFooterProps> = ({ title, link }) => {
  return (
    <Box className={styles.footer}>
      <Typography as="span" className={styles.text}>
        {title}
      </Typography>

      <AppLink href={SIGN_UP} className={styles.link}>
        {link}
      </AppLink>
    </Box>
  );
};
