import { useId, type ChangeEvent } from 'react';

import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';
import type { CheckboxProps } from '@/shared/ui/checkbox';
import { CheckIcon } from '@/shared/ui/icons/Icons';
import { INPUT_TYPES } from '@/shared/ui/input';

import styles from './Checkbox.module.scss';

const { CHECKBOX } = INPUT_TYPES;

export const Checkbox = ({ checked, onChange, label, disabled }: CheckboxProps) => {
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
        type={CHECKBOX}
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
