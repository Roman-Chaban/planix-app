import { buildClassName } from '@/shared/lib';

import { Box } from '@/shared/ui';
import type { GridItemProps } from '@/shared/ui/grid';

import styles from './Grid.module.scss';

export const GridItem = ({ children, span = 12, className }: GridItemProps) => {
  const SPAN_CLASS = styles[`col-span-${span}`];

  return <Box className={buildClassName(styles.item, SPAN_CLASS, className)}>{children}</Box>;
};
