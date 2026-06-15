'use client';

import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { ProjectDetailsProps } from '@/widgets/project-details';
import {
  DetailsInfoList,
  DetailsDescription,
  DetailsCard,
  mapProjectDetails,
} from '@/widgets/project-details/ui/details';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { Box } from '@/shared/ui';

import styles from './ProjectDetails.module.scss';

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
  const { t, i18n } = useTranslation(NS.PROJECT_DETAILS);

  const { details, description } = mapProjectDetails({
    project,
    t,
    lng: i18n.language,
  });

  return (
    <Box className={styles.wrapper}>
      <DetailsCard
        title={t('detailsTitle')}
        className={styles.details}
        titleClassName={styles.title}
      >
        <DetailsInfoList details={details} />
      </DetailsCard>

      <DetailsCard
        title={t('descriptionTitle')}
        className={styles.description}
        titleClassName={styles.title}
      >
        <DetailsDescription
          files={project.files}
          description={description}
          documentTitle={t('documentTitle')}
        />
      </DetailsCard>
    </Box>
  );
};
