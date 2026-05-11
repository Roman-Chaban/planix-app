import { type FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import styles from '@/shared/ui/form-field/styles/form-field.module.scss';
import { Typography } from '@/shared/ui/index';

export const FormDivider: FC<{ className?: string }> = ({ className }) => {
  return <Typography as="span" className={buildClassName(styles.divider, className)} />;
};
