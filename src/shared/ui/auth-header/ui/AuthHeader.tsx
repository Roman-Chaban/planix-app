import { type FC } from 'react';

import { Box, Typography } from '@/shared/ui';

import type { AuthHeaderProps } from '@/shared/ui/auth-header';

import styles from './AuthHeader.module.scss';

export const AuthHeader: FC<AuthHeaderProps> = ({
  title,
  highlightedText,
  isHighlightedIcon,
  subtitle,
}) => {
  return (
    <Box className={styles.header}>
      <Typography as="h1" className={styles.title}>
        {title}{' '}
        <Typography as="span" className={styles.highlightedText}>
          {highlightedText} {isHighlightedIcon && '👋'}
        </Typography>
      </Typography>

      <Typography as="p" className={styles.subtitle}>
        {subtitle}
      </Typography>
    </Box>
  );
};
