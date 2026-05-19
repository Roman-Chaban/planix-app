'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/ui/button/model/constants';
import { Button } from '@/shared/ui/index';
import styles from '@/shared/ui/project-button/ProjectButton.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;

export const ProjectButton: FC = () => {
  const { t } = useTranslation();

  return (
    <Button type={BUTTON} variant={DEFAULT} size="md" className={styles.button} fullWidth>
      {t('ProjectsHeader.button')}
    </Button>
  );
};
