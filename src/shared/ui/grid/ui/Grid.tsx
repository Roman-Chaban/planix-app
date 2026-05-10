import type { GridProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import styles from '@/shared/ui/grid/styles/grid.module.scss';
import { Box } from '@/shared/ui/index';


export const Grid: FC<GridProps> = ({ children, className }) => {
  return <Box className={buildClassName(styles.grid, className)}>{children}</Box>;
};
