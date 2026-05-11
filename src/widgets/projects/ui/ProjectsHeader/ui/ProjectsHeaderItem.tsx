import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/widgets/projects/styles/projects.module.scss';
import type { HeaderItem } from '@/widgets/projects/ui/ProjectsHeader/model/types';
import { BUTTON_TYPES } from '@/shared/constants/buttons';
import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import { Box, Button, Typography } from '@/shared/ui';

const { BUTTON } = BUTTON_TYPES;

export const ProjectsHeaderItem: FC<HeaderItem> = ({ label, isActive, onClick }) => {
  const { t } = useTranslation();

  return (
    <Box className={buildClassName(styles.box, isActive && styles.active)} onClick={onClick}>
      <Button type={BUTTON}>
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
