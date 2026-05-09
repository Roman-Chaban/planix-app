import { type FC } from 'react';

import { useFormContext } from '@/shared/context/form-context';
import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import type { FormInputWrapperProps } from '@/shared/ui/form-field/model/types';
import { Box } from '@/shared/ui/index';

import styles from '../styles/styles.module.scss';

export const FormWrapper: FC<FormInputWrapperProps> = ({ children, className }) => {
  const { hasError, variant } = useFormContext();

  const rootClassname = buildClassName(
    styles.inputWrapper,
    variant ? styles[variant] : '',
    { [styles.error]: hasError },
    className,
  );

  return <Box className={rootClassname}>{children}</Box>;
};
