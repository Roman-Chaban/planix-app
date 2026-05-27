import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@/shared/ui';

import styles from './ProjectDetails.module.scss';

export const ProjectDetailsHeader = () => {
  const { t } = useTranslation('projectDetails');

  return (
    <Box className={styles.header}>
      <Typography as="span" className={styles.title}>
        {t('projectDetailsTitle')}
      </Typography>
    </Box>
  );
};
