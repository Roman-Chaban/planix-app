import type { TableSizes, TableVariants } from '../model/constants';

import styles from '../ui/table.module.scss';

export const sizeClass: Record<TableSizes, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export const variantClass: Record<TableVariants, string> = {
  default: styles.variantDefault,
  bordered: styles.variantBordered,
  card: styles.variantCard,
  minimal: styles.variantMinimal,
};
