import type { FC } from 'react';

import type { LoginFooterProps } from '@/widgets/login';

import { Box, AppLink, Typography } from '@/shared/ui';

import styles from './LoginForm.module.scss';

export const LoginFooter: FC<LoginFooterProps> = ({ title, link }) => {
  return (
    <Box className={styles.footer}>
      <Typography as="span" className={styles.text}>
        {title}
      </Typography>

      {/* TODO: [Add the correct link when it will need] */}
      <AppLink href="/#" className={styles.link}>
        {link}
      </AppLink>
    </Box>
  );
};
