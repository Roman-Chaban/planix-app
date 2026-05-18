import { useId, type ChangeEvent, type FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import styles from '@/shared/ui/checkbox/Checkbox.module.scss';
import type { CheckboxProps } from '@/shared/ui/checkbox/Checkbox.types';
import { CheckIcon } from '@/shared/ui/icons/Icons';
import { INPUT_TYPES } from '@/shared/ui/input/Input.constants';
import { Typography } from '@/shared/ui/typography/Typography';

const { CHECKBOX } = INPUT_TYPES;

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
