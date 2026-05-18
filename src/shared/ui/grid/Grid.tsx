import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import styles from '@/shared/ui/grid/Grid.module.scss';
import type { GridProps } from '@/shared/ui/grid/Grid.types';
import { Box } from '@/shared/ui/index';

export const Grid: FC<GridProps> = ({ children, className }) => {
  return <Box className={buildClassName(styles.grid, className)}>{children}</Box>;
};
