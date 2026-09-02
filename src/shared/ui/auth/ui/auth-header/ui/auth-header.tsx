import type { AuthHeaderProps } from '../model/types';

import { Box, Typography } from '@/shared/ui';

import styles from './auth-header.module.scss';

export const AuthHeader = ({
  title,
  highlightedText,
  isHighlightedIcon,
  subtitle,
}: AuthHeaderProps) => {
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
