import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box } from '@/shared/ui';
import type { GridProps } from '@/shared/ui/grid';

import styles from './Grid.module.scss';

export const Grid: FC<GridProps> = ({ children, className }) => {
  return <Box className={buildClassName(styles.grid, className)}>{children}</Box>;
};
