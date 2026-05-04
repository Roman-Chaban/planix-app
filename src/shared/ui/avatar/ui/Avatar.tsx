import type { AvatarProps } from '../model/types';

import type { FC } from 'react';

import Image from 'next/image';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import { Box } from '@/shared/ui/box/ui/Box';

import styles from './styles.module.scss';

export const Avatar: FC<AvatarProps> = ({
  src,
  icon,
  alt = 'avatar',
  size = 'md',
  variant = 'circle',
  fallback,
  className,
}) => {
  return (
    <Box className={classNames(styles.avatar, styles[size], styles[variant], className)}>
      {icon ? (
        <Box className={styles.icon}>{icon}</Box>
      ) : src ? (
        <Image src={src} alt={alt} fill className={styles.image} />
      ) : (
        <Box className={styles.fallback}>{fallback ?? 'Fallback Icon'}</Box>
      )}
    </Box>
  );
};
