import type { GridProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';

import styles from './grid.module.scss';

export const Grid = ({ children, className }: GridProps) => {
  return <Box className={buildClassName(styles.grid, className)}>{children}</Box>;
};
