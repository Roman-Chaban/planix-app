'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/features/create-project/styles/project-button.module.scss';
import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/config/ui/buttons';
import { Button } from '@/shared/ui/index';

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
