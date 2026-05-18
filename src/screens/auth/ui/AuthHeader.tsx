import type { AuthHeaderProps } from '@/screens/auth/config/Auth.types';

import type { FC } from 'react';

import { Avatar, Box, Typography } from '@/shared/ui/index';
import styles from '@/screens/auth/ui/Auth.module.scss';

export const AuthHeader: FC<AuthHeaderProps> = ({ title, subtitle, highlightedText, icon }) => {
  return (
    <Box className={styles.header}>
      <Typography as="h1" className={styles.title}>
        {title}{' '}
        {highlightedText && (
          <Typography as="span" className={styles.highlight}>
            {highlightedText}
          </Typography>
        )}
      </Typography>

      {icon && <Avatar icon={icon} />}

      {subtitle && (
        <Typography as="p" className={styles.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
