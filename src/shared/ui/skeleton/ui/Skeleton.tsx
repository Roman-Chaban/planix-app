import type { SkeletonProps } from '../model/types';

import { Box } from '../../box';

import styles from './Skeleton.module.scss';

export const Skeleton = ({
  width = '100%',
  height = 20,
  radius = '0',
}: SkeletonProps) => {
  const geometry = { width, height, borderRadius: radius };

  return <Box className={styles.skeleton} style={geometry} />;
};
