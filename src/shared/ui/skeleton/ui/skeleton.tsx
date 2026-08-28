import { Box } from '../../box';

import styles from './skeleton.module.scss';

export type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
};

export const Skeleton = ({ width = '100%', height = 20, radius = '0' }: SkeletonProps) => {
  const geometry = { width, height, borderRadius: radius };

  return <Box className={styles.skeleton} style={geometry} />;
};
