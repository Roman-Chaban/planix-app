'use client';

import type { DetailsProps } from './model/types';

import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Header } from '@/widgets/header';
import { Header as ProjectHeader } from '@/widgets/project-management';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, PageWrapper } from '@/shared/ui';

import { Description } from '../description';

import { InfoCard, InfoList } from '../info';

import styles from './Details.module.scss';
import { mapProjectDetails } from './lib/project.mapper';

export const Details: FC<DetailsProps> = ({ project }) => {
  const { t, i18n } = useTranslation(NS.PROJECT);

  const { details, description } = mapProjectDetails({
    project,
    t,
    lng: i18n.language,
  });

  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        showStatus
        status={project.status}
        translationNamespace="project"
        title="title"
        metaInfo={{ label: 'label', value: 'value' }}
      />

      <Box className={styles.wrapper}>
        <InfoCard
          title={t('detailsTitle')}
          className={styles.details}
          titleClassName={styles.title}
        >
          <InfoList details={details} />
        </InfoCard>

        <InfoCard
          title={t('descriptionTitle')}
          className={styles.description}
          titleClassName={styles.title}
        >
          <Description
            files={project.files}
            description={description}
            documentTitle={t('documentTitle')}
          />
        </InfoCard>
      </Box>
    </PageWrapper>
  );
};
