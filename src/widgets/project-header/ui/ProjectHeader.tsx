'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { ProjectHeaderProps } from '@/widgets/project-header/model/types';

import { Box, Typography } from '@/shared/ui';

import styles from './ProjectHeader.module.scss';

export const ProjectHeader: FC<ProjectHeaderProps> = ({ title, metaInfo }) => {
  const { t } = useTranslation();

  return (
    <Box className={styles.container}>
      <Typography as="h3" className={styles.heading}>
        {t(title)}
      </Typography>

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
