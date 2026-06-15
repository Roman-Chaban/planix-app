'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';
import type { ProjectButtonProps } from '@/shared/ui/project-button';

export const ProjectButton: FC<ProjectButtonProps> = ({
  onClick,
  type,
  disabled,
  variant,
  isLoading,
  size,
  shape,
  className,
  fullWidth,
  maxWidth,
  translationNamespace,
}) => {
  const { t } = useTranslation(translationNamespace);

  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      shape={shape}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      isLoading={isLoading}
      className={className}
      maxWidth={maxWidth}
    >
      {isLoading ? t('isProjectPeding') : t('addProjectButton')}
    </Button>
  );
};
