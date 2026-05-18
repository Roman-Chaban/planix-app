import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';

import { Box } from '@/shared/ui';
import styles from '@/shared/ui/form-field/FormField.module.scss';
import type { FormWrapperProps } from '@/shared/ui/form-field/FormField.types';

export const FormWrapper: FC<FormWrapperProps> = ({
  children,
  className,
  variant = 'default',
  error,
}) => {
  const hasError = Boolean(error);

  const rootClassname = buildClassName(
    styles.inputWrapper,
    styles[variant],
    {
      [styles.error]: hasError,
    },
    className,
  );

  return <Box className={rootClassname}>{children}</Box>;
};
