import type { ChangeEvent, FC } from 'react';

import { Box, Input } from '@/shared/ui';

import { INPUT_TYPES } from '@/shared/ui/input';

import styles from './Switch.module.scss';

const { CHECKBOX } = INPUT_TYPES;

type SwitchProps = {
  isOn: boolean;
  onToggle: (value: boolean) => void;
};

export const Switch: FC<SwitchProps> = ({ isOn, onToggle }) => {
  const handleSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
  };

  return (
    <Box as="label" className={styles.switch}>
      <Input
        type={CHECKBOX}
        checked={isOn}
        onChange={handleSwitch}
        className={styles.input}
      />
      <Box className={styles.track} />
      <Box className={styles.circle} />
    </Box>
  );
};
