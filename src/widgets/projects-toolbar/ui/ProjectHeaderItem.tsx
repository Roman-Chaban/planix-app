'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { ProjectHeaderItemProps } from '@/widgets/projects-toolbar';

import { buildClassName } from '@/shared/lib';
import { Box, Button, Typography } from '@/shared/ui';
import {
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/model/constants';

import styles from './ProjectsToolbar.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { COMPACT } = BUTTON_SIZES;
const { TRANSPARENT } = BUTTON_VARIANTS;

export const ProjectHeaderItem: FC<ProjectHeaderItemProps> = ({
  id,
  label,
  isActive,
  onClick,
}) => {
  const { t } = useTranslation('addProjectHeader');

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
          {t(label)}
        </Typography>
      </Button>
    </Box>
  );
};
