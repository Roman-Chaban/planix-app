import type { FC } from 'react';

import type { LoginHeaderProps } from '@/widgets/login/model/types';

import styles from '@/widgets/login/ui/Login.module.scss';
import { Avatar, Box, Typography } from '@/shared/ui';

export const LoginHeader: FC<LoginHeaderProps> = ({ title, subtitle, highlightedText, icon }) => {
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
