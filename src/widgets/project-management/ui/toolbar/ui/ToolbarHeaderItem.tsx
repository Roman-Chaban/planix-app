'use client';

import type { FC } from 'react';

import type { ToolbarHeaderItemProps } from '@/widgets/project-management/ui/toolbar';

import { buildClassName } from '@/shared/lib';
import { Box, Button, Typography } from '@/shared/ui';
import {
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/lib/constants';

import styles from './Toolbar.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { COMPACT } = BUTTON_SIZES;
const { TRANSPARENT } = BUTTON_VARIANTS;

export const ToolbarHeaderItem: FC<ToolbarHeaderItemProps> = ({
  id,
  label,
  isActive,
  onClick,
}) => {
  return (
    <Box
      className={buildClassName(styles.box, isActive && styles.active)}
      onClick={onClick}
      key={id}
    >
      <Button type={BUTTON} variant={TRANSPARENT} size={COMPACT}>
        <Typography
          as="span"
          className={buildClassName(
            styles.label,
            isActive && styles.activeLabel,
          )}
        >
          {label}
        </Typography>
      </Button>
    </Box>
  );
};
