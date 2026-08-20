import type { TableSize, TableVariant } from '../model/types';

import styles from '../ui/table.module.scss';

export const sizeClass: Record<TableSize, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export const variantClass: Record<TableVariant, string> = {
  default: styles.variantDefault,
  bordered: styles.variantBordered,
  card: styles.variantCard,
  minimal: styles.variantMinimal,
};
