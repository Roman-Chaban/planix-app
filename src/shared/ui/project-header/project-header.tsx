'use client';

import type { ProjectHeaderProps } from './model/types';

import { useTranslation } from 'react-i18next';

import { Box, StatusBadge, Typography } from '@/shared/ui';

import styles from './project-header.module.scss';

export const ProjectHeader = ({
  title,
  metaInfo,
  translationNamespace,
  status,
  showStatus = false,
}: ProjectHeaderProps) => {
  const { t } = useTranslation(translationNamespace);

  return (
    <Box className={styles.container}>
      <Box className={styles.headingContainer}>
        <Typography as="h3" className={styles.heading}>
          {t(title)}
        </Typography>

        {showStatus && status && <StatusBadge status={status} />}
      </Box>

      <Box className={styles.meta}>
        <Typography as="p" className={styles.metaLabel}>
          {t(metaInfo.label)}
        </Typography>

        <Typography as="span" className={styles.metaValue}>
          {t(metaInfo.value)}
        </Typography>
      </Box>
    </Box>
  );
};
