import { buildClassName } from '@/shared/lib';

import { Box } from '@/shared/ui';
import type { GridProps } from '@/shared/ui/grid';

import styles from './grid.module.scss';

export const Grid = ({ children, className }: GridProps) => {
  return <Box className={buildClassName(styles.grid, className)}>{children}</Box>;
};
