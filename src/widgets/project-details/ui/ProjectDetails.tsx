'use client';

import { useMemo, type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { ProjectDetailsCard, type ProjectDetailsProps } from '@/widgets/project-details';
import { toDisplay } from '@/features/project-add/ui/project-add-fields';
import { Box, List, Typography } from '@/shared/ui';

import styles from './ProjectDetails.module.scss';

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
  const { t } = useTranslation('projectDetails');

  const { name, client, created_at, dueDate, price, platform, progress, description } = project;

  const formattedCreatedAt = toDisplay(created_at ?? '');
  const formattedDueDate = toDisplay(dueDate ?? '');

  const projectFields = useMemo(
    () => [
      { id: 1, label: 'Project Name', value: name },
      { id: 2, label: 'Client Name', value: client.name },
      { id: 3, label: 'Start Date', value: formattedCreatedAt },
      { id: 4, label: 'Due Date', value: formattedDueDate },
      { id: 5, label: 'Price', value: `$${price}` },
      { id: 6, label: 'Platform', value: platform },
      { id: 7, label: 'Progress', value: `${progress}% Complete` },
    ],
    [name, client.name, formattedCreatedAt, formattedDueDate, price, platform, progress],
  );

  return (
    <Box className={styles.wrapper}>
      <ProjectDetailsCard
        className={styles.details}
        title={t('detailsTitle')}
        titleClassName={styles.title}
      >
        <List
          className={styles.list}
          itemClassName={styles.item}
          getItemKey={(label) => label.id}
          renderList={projectFields}
          renderItem={(item) => (
            <Box key={item.id} className={styles.box}>
              <Typography as="span" className={styles.label}>
                {item.label}
              </Typography>
              <Typography as="span" className={styles.value}>
                {item.value}
              </Typography>
            </Box>
          )}
        />
      </ProjectDetailsCard>

      <ProjectDetailsCard
        className={styles.description}
        title={t('descriptionTitle')}
        titleClassName={styles.title}
      >
        <Typography as="span" className={styles.text}>
          {description}
        </Typography>

        <Box>
          <Typography as="h2" className={styles.title}>
            {t('documentTitle')}
          </Typography>
        </Box>
      </ProjectDetailsCard>
    </Box>
  );
};
