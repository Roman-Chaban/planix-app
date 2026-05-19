import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { ProjectsHeaderItemProps } from '@/widgets/projects/config/ProjectsHeader.types';
import styles from '@/widgets/projects/ui/ProjectsHeader.module.scss';
import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import { Box, Button, Typography } from '@/shared/ui';
import { BUTTON_TYPES } from '@/shared/ui/button/model/constants';

const { BUTTON } = BUTTON_TYPES;

export const ProjectsHeaderItem: FC<ProjectsHeaderItemProps> = ({ label, isActive, onClick }) => {
  const { t } = useTranslation();

  return (
    <Box className={buildClassName(styles.box, isActive && styles.active)} onClick={onClick}>
      <Button type={BUTTON} className={styles.button}>
        <Typography
          as="span"
          className={buildClassName(styles.label, isActive && styles.activeLabel)}
        >
          {t(label)}
        </Typography>
      </Button>
    </Box>
  );
};
