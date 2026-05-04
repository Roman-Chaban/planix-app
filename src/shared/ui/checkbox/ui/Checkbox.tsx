import type { CheckboxProps } from '../model/types';

import { useId, type ChangeEvent, type FC } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { CheckIcon } from '@/shared/ui/icons/ui/Icons';
import { Typography } from '@/shared/ui/typography/ui/Typography';

import { INPUT_TYPES } from '@shared/constants/inputs';

import styles from './styles.module.scss';

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label, disabled }) => {
  const id = useId();

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label htmlFor={id} className={classNames(styles.wrapper, disabled && styles.disabled)}>
      <input
        id={id}
        type={INPUT_TYPES.CHECKBOX}
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={handleCheckChange}
      />

      <Typography as="span" className={styles.box}>
        <CheckIcon className={classNames(styles.checkIcon, checked && styles.visible)} />
      </Typography>

      {label && (
        <Typography as="span" className={styles.label}>
          {label}
        </Typography>
      )}
    </label>
  );
};
