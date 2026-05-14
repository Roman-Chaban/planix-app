import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import type { GridItemProps } from '@/shared/ui/grid/model/types';
import styles from '@/shared/ui/grid/styles/grid.module.scss';
import { Box } from '@/shared/ui/index';

export const GridItem: FC<GridItemProps> = ({ children, span = 12, className }) => {
  const SPAN_CLASS = styles[`col-span-${span}`];

  return <Box className={buildClassName(styles.item, SPAN_CLASS, className)}>{children}</Box>;
};
