import { type FC } from 'react';

import { ICON_POSITION } from '@/shared/constants';
import { buildClassName } from '@/shared/lib';
import { Box, Input } from '@/shared/ui';
import type { InputFieldProps } from '@/shared/ui/form-field';

import styles from './FormField.module.scss';
import { FormIcon } from './FormIcon';

const { START, END } = ICON_POSITION;

export const InputField: FC<InputFieldProps> = ({
  id,
  error,
  startIcon,
  endIcon,
  onStartIconClick,
  onEndIconClick,
  inputProps,
  className,
}) => {
  return (
    <Box
      className={buildClassName(styles.inputWrapper, {
        [styles.error]: !!error,
      })}
    >
      {startIcon && (
        <FormIcon error={error} position={START} onClick={onStartIconClick}>
          {startIcon}
        </FormIcon>
      )}

      <Input
        id={id}
        aria-invalid={!!error}
        {...inputProps}
        className={className}
      />

      {endIcon && (
        <FormIcon error={error} position={END} onClick={onEndIconClick}>
          {endIcon}
        </FormIcon>
      )}
    </Box>
  );
};
