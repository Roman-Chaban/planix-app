import { type FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import type { FormFieldProps } from '@/shared/ui/form-field/model/types';
import styles from '@/shared/ui/form-field/styles/form-field.module.scss';
import { Box } from '@/shared/ui/index';

export const FormField: FC<FormFieldProps> = ({ children, className }) => {
  return <Box className={buildClassName(styles.wrapper, className)}>{children}</Box>;
};
