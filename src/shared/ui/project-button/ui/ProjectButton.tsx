'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';
import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/ui/button/model/constants';
import type { ProjectButtonProps } from '@/shared/ui/project-button';

import styles from './ProjectButton.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;

export const ProjectButton: FC<ProjectButtonProps> = ({ onClick }) => {
  const { t } = useTranslation('addProjectHeader');

  return (
    <Button
      type={BUTTON}
      variant={DEFAULT}
      size="md"
      className={styles.button}
      fullWidth
      onClick={onClick}
    >
      {t('addProjectButton')}
    </Button>
  );
};
