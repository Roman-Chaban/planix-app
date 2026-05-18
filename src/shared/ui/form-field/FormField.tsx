import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import styles from '@/shared/ui/form-field/FormField.module.scss';
import type { FormFieldProps } from '@/shared/ui/form-field/FormField.types';
import { Box } from '@/shared/ui/index';

export const FormField: FC<FormFieldProps> = ({ children, className }) => {
  return <Box className={buildClassName(className, styles.field)}>{children}</Box>;
};
