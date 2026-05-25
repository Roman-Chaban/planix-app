import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box } from '@/shared/ui';

import type { FormWrapperProps } from '@/shared/ui/form-field/model/types';

import styles from './FormField.module.scss';

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
