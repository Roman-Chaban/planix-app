import type { FC } from 'react';

import type { LoginFooterProps } from '@/widgets/login/model/types';

import styles from '@/widgets/login/ui/Login.module.scss';
import { Box, AppLink, Typography } from '@/shared/ui';

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
