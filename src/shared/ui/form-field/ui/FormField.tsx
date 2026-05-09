import { type FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import type { FormFieldProps } from '@/shared/ui/form-field/model/types';
import { Box } from '@/shared/ui/index';

import styles from '../styles/styles.module.scss';

export const FormField: FC<FormFieldProps> = ({ children, className }) => {
  return <Box className={buildClassName(styles.wrapper, className)}>{children}</Box>;
};
