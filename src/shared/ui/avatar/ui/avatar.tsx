import type { AvatarProps } from '../model/types';

import Image from 'next/image';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';

import { UserFallbackIcon } from '../../icons';
import { AVATAR_SIZES, AVATAR_VARIANTS, DEFAULT_AVATAR_ALT } from '../model/constants';

import styles from './avatar.module.scss';

export const Avatar = ({
  src,
  icon,
  alt = DEFAULT_AVATAR_ALT,
  size = AVATAR_SIZES.MEDIUM,
  variant = AVATAR_VARIANTS.CIRCLE,
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

      {!icon && !src && (fallback ?? <UserFallbackIcon />)}
    </Box>
  );
};
