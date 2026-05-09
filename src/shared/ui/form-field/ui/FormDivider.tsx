import { type FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import { Typography } from '@/shared/ui/index';

import styles from '../styles/styles.module.scss';

export const FormDivider: FC<{ className?: string }> = ({ className }) => {
  return <Typography as="span" className={buildClassName(styles.divider, className)} />;
};
