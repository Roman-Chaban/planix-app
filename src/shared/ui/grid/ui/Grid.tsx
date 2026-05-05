import type { GridProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import { Box } from '@/shared/ui/index';

import styles from '../styles/styles.module.scss';

export const Grid: FC<GridProps> = ({ children, className }) => {
  return <Box className={buildClassName(styles.grid, className)}>{children}</Box>;
};
