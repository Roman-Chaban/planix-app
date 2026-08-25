import type { WithClassName } from '@types';

import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';

import styles from './form-field.module.scss';

export const FormDivider = ({ className }: WithClassName) => {
  return <Typography as="span" className={buildClassName(styles.divider, className)} />;
};
