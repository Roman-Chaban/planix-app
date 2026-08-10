'use client';

import type { ToolbarHeaderItemProps } from '../model/header.types';

import { buildClassName } from '@/shared/lib';
import { Box, Button, Typography } from '@/shared/ui';
import {
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/lib/button.constants';

import styles from './/ToolbarHeader.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { COMPACT } = BUTTON_SIZES;
const { TRANSPARENT } = BUTTON_VARIANTS;

export const ToolbarHeaderItem = ({ id, label, isActive, onClick }: ToolbarHeaderItemProps) => {
  return (
    <Box
      className={buildClassName(styles.box, isActive && styles.active)}
      onClick={onClick}
      key={id}
    >
      <Button type={BUTTON} variant={TRANSPARENT} size={COMPACT}>
        <Typography
          as="span"
          className={buildClassName(styles.label, isActive && styles.activeLabel)}
        >
          {label}
        </Typography>
      </Button>
    </Box>
  );
};
