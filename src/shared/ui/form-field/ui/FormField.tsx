import type { FC } from 'react';

import type { FormFieldProps } from '@/shared/ui/form-field/model/types';
import { Box } from '@/shared/ui/index';

export const FormField: FC<FormFieldProps> = ({ children, className }) => {
  return <Box className={className}>{children}</Box>;
};
