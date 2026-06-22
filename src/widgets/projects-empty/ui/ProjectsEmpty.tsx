'use client';

import { useTranslation } from 'react-i18next';

import { useProjectToolbar } from '@/widgets/projects-toolbar/lib/useProjectToolbar';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { Box, ProjectButton, Typography } from '@/shared/ui';
import {
  BUTTON_MAX_WIDTH,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/model/constants';
import { NoProjectsIcon } from '@/shared/ui/icons';

import styles from './ProjectsEmpty.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { ROUNDED } = BUTTON_SHAPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { LARGE } = BUTTON_SIZES;

const { LG } = BUTTON_MAX_WIDTH;

export const ProjectsEmpty = () => {
  const { t } = useTranslation(NS.PROJECTS_EMPTY);

  const { handleCreateProject } = useProjectToolbar();

  return (
    <Box className={styles.box}>
      <Box className={styles.iconWrapper}>
        <NoProjectsIcon />
      </Box>

      <Box className={styles.content}>
        <Typography as="h4" className={styles.title}>
          {t('title')}
        </Typography>
        <Typography as="p" className={styles.subtitle}>
          {t('subtitle')}
        </Typography>

        <ProjectButton
          type={BUTTON}
          shape={ROUNDED}
          variant={DEFAULT}
          size={LARGE}
          maxWidth={LG}
          onClick={handleCreateProject}
          translationNamespace={NS.PROJECTS_EMPTY}
        />
      </Box>
    </Box>
  );
};
