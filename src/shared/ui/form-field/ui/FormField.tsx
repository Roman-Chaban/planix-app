import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box } from '@/shared/ui';
import type { FormFieldProps } from '@/shared/ui/form-field/model/types';

import styles from './FormField.module.scss';

export const FormField: FC<FormFieldProps> = ({ children, className }) => {
  return <Box className={buildClassName(className, styles.field)}>{children}</Box>;
};
