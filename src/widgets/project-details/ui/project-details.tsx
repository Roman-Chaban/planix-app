'use client';

import type { ProjectDetailsProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { Header } from '@/widgets/header';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, PageWrapper } from '@/shared/ui';

import { mapProjectDetails } from '../lib/map-project-details';

import { Description } from './description/description';

import { ProjectHeader } from './header/project-header';
import { InfoCard } from './info/info-card';
import { InfoList } from './info/info-list';
import styles from './project-details.module.scss';

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
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
        translationNamespace={NS.PROJECT}
        title="header.title"
        metaInfo={{ label: 'header.label', value: 'header.value' }}
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
