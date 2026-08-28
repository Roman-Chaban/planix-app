import type { SwitchProps } from '../model/types';

import type { ChangeEvent } from 'react';

import { Box, Input } from '@/shared/ui';

import { FORM_FIELD_TYPES } from '../../form/form-field';

import styles from './switch.module.scss';

const { CHECKBOX } = FORM_FIELD_TYPES;

export const Switch = ({ isOn, onToggle }: SwitchProps) => {
  const handleSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
  };

  return (
    <Box as="label" className={styles.switch}>
      <Input type={CHECKBOX} checked={isOn} onChange={handleSwitch} className={styles.input} />
      <Box className={styles.track} />
      <Box className={styles.circle} />
    </Box>
  );
};
