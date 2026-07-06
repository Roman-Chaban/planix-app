import { buildClassName } from '@/shared/lib';

import type { WithClassName } from '@/shared/types/types';
import { Typography } from '@/shared/ui';

import styles from './FormField.module.scss';

export const FormDivider = ({ className }: WithClassName) => {
  return <Typography as="span" className={buildClassName(styles.divider, className)} />;
};
