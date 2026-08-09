'use client';

import type { ProjectDetailsProps } from '../model/project-details.types';

import { useTranslation } from 'react-i18next';

import { Header } from '@/widgets/header';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, PageWrapper } from '@/shared/ui';

import { mapProjectDetails } from '../lib/project-details.mapper';

import { Description } from './description/ui/Description';

import { ProjectHeader } from './header/ui/ProjectHeader';
import { InfoCard } from './info/ui/InfoCard';
import { InfoList } from './info/ui/InfoList';
import styles from './ProjectDetails.module.scss';

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
