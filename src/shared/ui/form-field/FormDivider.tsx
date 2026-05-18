import { type FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import styles from '@/shared/ui/form-field/FormField.module.scss';
import { Typography } from '@/shared/ui/index';

export const FormDivider: FC<{ className?: string }> = ({ className }) => {
  return <Typography as="span" className={buildClassName(styles.divider, className)} />;
};
