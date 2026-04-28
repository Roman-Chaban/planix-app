import type { CheckboxProps } from './model/types';

import { useId, type ChangeEvent, type FC } from 'react';

import { classNames } from '@/shared/lib/helpers/class-names';
import { CheckIcon } from '@/shared/ui/icons/Icons';
import { Typography } from '@/shared/ui/typography/Typography';

import { INPUT_TYPES } from '@shared/constants/inputs';

import styles from './styles.module.scss';

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label, disabled }) => {
  const id = useId();

  const CHECKBOX_CLASSNAMES = classNames(styles.checkIcon, checked && styles.visible);

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
        <CheckIcon className={CHECKBOX_CLASSNAMES} />
      </Typography>

      {label && (
        <Typography as="span" className={styles.label}>
          {label}
        </Typography>
      )}
    </label>
  );
};
