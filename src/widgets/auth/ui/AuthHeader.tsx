import type { FC } from 'react';

import type { AuthHeaderProps } from '@/widgets/auth/model/types';

import { Avatar, Box, Typography } from '@/shared/ui/index';

import styles from '../styles/styles.module.scss';

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
