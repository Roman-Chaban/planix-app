import type { MenuItemProps } from '../model/types';

import { buildClassName } from '@/shared/lib';
import { Box, Button, Typography } from '@/shared/ui';

import { BUTTON_MAX_WIDTH, BUTTON_VARIANTS } from '@/shared/ui/button';

import styles from './ProfileMenu.module.scss';

const { TRANSPARENT } = BUTTON_VARIANTS;
const { XL } = BUTTON_MAX_WIDTH;

export const MenuItem = ({ id, label, t, isActive, setActiveId }: MenuItemProps) => {
  return (
    <Box className={buildClassName(styles.box, isActive && styles.boxActive)}>
      <Button
        fullWidth
        variant={TRANSPARENT}
        maxWidth={XL}
        onClick={() => setActiveId(id)}
        className={styles.item}
      >
        <Typography as="span" className={buildClassName(styles.label, isActive && styles.isActive)}>
          {t(label)}
        </Typography>
      </Button>
    </Box>
  );
};
