import { useId, type ChangeEvent } from 'react';

import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';
import type { CheckboxProps } from '@/shared/ui/checkbox';

import { FORM_FIELD_TYPES } from '../../form/form-field';
import { CheckIcon } from '../../icons';

import styles from './checkbox.module.scss';

const { CHECKBOX } = FORM_FIELD_TYPES;

export const Checkbox = ({ checked, onChange, label, disabled }: CheckboxProps) => {
  const generatedId = useId();

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label
      htmlFor={generatedId}
      className={buildClassName(styles.wrapper, disabled && styles.disabled)}
    >
      <input
        id={generatedId}
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
