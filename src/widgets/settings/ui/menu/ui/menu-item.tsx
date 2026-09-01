import type { MenuItemProps } from '../model/types';

import { buildClassName } from '@/shared/lib';
import { Box, Button, Tooltip, Typography } from '@/shared/ui';

import { BUTTON_VARIANTS } from '@/shared/ui/button';

import { BlockedIcon } from '@/shared/ui/icons';

import { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

import styles from './settings-menu.module.scss';

const { TRANSPARENT } = BUTTON_VARIANTS;
const { RIGHT } = TOOLTIP_POSITION;

export const MenuItem = ({ label, t, isActive, disabled, onClick }: MenuItemProps) => {
  return (
    <Box
      className={buildClassName(
        styles.box,
        disabled ? styles.boxDisabled : isActive && styles.boxActive,
      )}
    >
      <Button
        fullWidth
        variant={TRANSPARENT}
        data-disabled={disabled}
        onClick={onClick}
        className={styles.item}
      >
        <Typography as="span" className={buildClassName(styles.label, isActive && styles.isActive)}>
          {t(label)}
        </Typography>

        {disabled && (
          <Box as="div" className={styles.blockedIcon}>
            <Tooltip position={RIGHT} message={t('settingsMenu.restrictedFeature')}>
              <BlockedIcon />
            </Tooltip>
          </Box>
        )}
      </Button>
    </Box>
  );
};
