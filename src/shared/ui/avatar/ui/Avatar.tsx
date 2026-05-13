import type { FC } from 'react';

import Image from 'next/image';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import type { AvatarProps } from '@/shared/ui/avatar/model/types';

import styles from '@/shared/ui/avatar/styles/avatar.module.scss';
import { Box } from '@/shared/ui/box/ui/Box';

export const Avatar: FC<AvatarProps> = ({
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
}) => {
  return (
    <Box className={buildClassName(styles.avatar, styles[size], styles[variant], className)}>
      {icon && <Box className={styles.icon}>{icon}</Box>}

      {!icon && src && (
        <Image
          width={width}
          height={height}
          {...avatarProps}
          src={src}
          alt={alt}
          className={styles.image}
        />
      )}

      {!icon && !src && <Box className={styles.fallback}>{fallback ?? 'Fallback'}</Box>}
    </Box>
  );
};
