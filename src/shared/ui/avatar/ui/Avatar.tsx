import Image from 'next/image';

import { buildClassName } from '@/shared/lib';

import { Box } from '@/shared/ui';
import type { AvatarProps } from '@/shared/ui/avatar';

import styles from './avatar.module.scss';

export const Avatar = ({
  src,
  icon,
  alt = 'avatar',
  size = 'md',
  variant = 'circle',
  width,
  height,
  fallback,
  className,
  ...avatarProps
}: AvatarProps) => {
  return (
    <Box className={buildClassName(styles.avatar, className)}>
      {icon && <Box className={styles.icon}>{icon}</Box>}

      {!icon && src && (
        <Image
          width={width}
          height={height}
          {...avatarProps}
          src={src}
          alt={alt}
          className={buildClassName(styles.image, styles[size], styles[variant])}
        />
      )}

      {!icon && !src && <Box className={styles.fallback}>{fallback ?? 'Fallback'}</Box>}
    </Box>
  );
};
