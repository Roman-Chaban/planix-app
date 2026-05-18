import type { CheckboxProps } from './checkbox.types';

import { useId, type ChangeEvent, type FC } from 'react';

import { INPUT_TYPES } from '@/shared/config/ui/inputs';
import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import styles from '@/shared/ui/checkbox/Checkbox.module.scss';
import { CheckIcon } from '@/shared/ui/icons/Icons';
import { Typography } from '@/shared/ui/typography/Typography';

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label, disabled }) => {
  const checkboxId = useId();

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label
      htmlFor={checkboxId}
      className={buildClassName(styles.wrapper, disabled && styles.disabled)}
    >
      <input
        id={checkboxId}
        type={INPUT_TYPES.CHECKBOX}
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={handleCheckChange}
      />

      <Typography as="span" className={styles.box}>
        <CheckIcon className={buildClassName(styles.checkIcon, checked && styles.visible)} />
      </Typography>

      {label && (
        <Typography as="span" className={styles.label}>
          {label}
        </Typography>
      )}
    </label>
  );
};
