import type { FC } from 'react';

import { ROUTES } from '@/app/routes';
import { Box, AppLink, Typography } from '@/shared/ui';
import type { AuthFooterProps } from '@/shared/ui/auth-footer';

import styles from './AuthFooter.module.scss';

const { REGISTER: SIGN_UP } = ROUTES;

export const AuthFooter: FC<AuthFooterProps> = ({ title, link }) => {
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
