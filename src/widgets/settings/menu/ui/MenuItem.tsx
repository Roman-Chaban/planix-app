import type { MenuItemProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';
import { Box, Button, Typography } from '@/shared/ui';

import { BUTTON_VARIANTS } from '@/shared/ui/button';

import styles from './ProfileMenu.module.scss';

const { TRANSPARENT } = BUTTON_VARIANTS;

export const MenuItem: FC<MenuItemProps> = ({
  id,
  label,
  t,
  isActive,
  setActiveId,
}) => {
  return (
    <Box className={buildClassName(styles.box, isActive && styles.boxActive)}>
      <Button
        fullWidth
        variant={TRANSPARENT}
        onClick={() => setActiveId(id)}
        className={styles.item}
      >
        <Typography
          as="span"
          className={buildClassName(styles.label, isActive && styles.isActive)}
        >
          {t(label)}
        </Typography>
      </Button>
    </Box>
  );
};
