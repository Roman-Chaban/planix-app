'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, ProjectButton, Typography } from '@/shared/ui';
import {
  BUTTON_MAX_WIDTH,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/lib/constants';
import { NoProjectsIcon } from '@/shared/ui/icons';

import { useToolbar } from '../../toolbar';

import styles from './Empty.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { ROUNDED } = BUTTON_SHAPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { LARGE } = BUTTON_SIZES;

const { XL } = BUTTON_MAX_WIDTH;

export const Empty = () => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  const { handleCreateProject } = useToolbar();

  return (
    <Box className={styles.box}>
      <Box className={styles.iconWrapper}>
        <NoProjectsIcon />
      </Box>

      <Box className={styles.content}>
        <Typography as="h4" className={styles.title}>
          {t('projectEmpty.title')}
        </Typography>
        <Typography as="p" className={styles.subtitle}>
          {t('projectEmpty.subtitle')}
        </Typography>

        <ProjectButton
          type={BUTTON}
          shape={ROUNDED}
          variant={DEFAULT}
          size={LARGE}
          maxWidth={XL}
          label={t('projectEmpty.addProjectButton')}
          onClick={handleCreateProject}
        />
      </Box>
    </Box>
  );
};
