import type { AvatarProps } from '../model/types';

import type { FC } from 'react';

import Image from 'next/image';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';

import { Box } from '@/shared/ui/box/ui/Box';

import styles from '../styles/styles.module.scss';

export const Avatar: FC<AvatarProps> = ({
  src,
  icon,
  alt = 'avatar',
  size = 'md',
  variant = 'circle',
  fallback,
  className,
  ...avatarProps
}) => {
  return (
    <Box className={buildClassName(styles.avatar, styles[size], styles[variant], className)}>
      {icon && <Box className={styles.icon}>{icon}</Box>}

      {!icon && src && <Image {...avatarProps} src={src} alt={alt} fill className={styles.image} />}

      {!icon && !src && <Box className={styles.fallback}>{fallback ?? 'Fallback'}</Box>}
    </Box>
  );
};
