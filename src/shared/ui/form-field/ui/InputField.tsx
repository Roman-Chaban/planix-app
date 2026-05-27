import { type FC } from 'react';

import { ICON_POSITION } from '@/shared/constants';
import { Input } from '@/shared/ui';
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
    <div className={styles.inputWrapper}>
      {startIcon && (
        <FormIcon position={START} onClick={onStartIconClick}>
          {startIcon}
        </FormIcon>
      )}

      <Input id={id} aria-invalid={!!error} {...inputProps} className={className} />

      {endIcon && (
        <FormIcon position={END} onClick={onEndIconClick}>
          {endIcon}
        </FormIcon>
      )}
    </div>
  );
};
