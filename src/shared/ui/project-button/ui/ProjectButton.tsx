'use client';

import type { FC } from 'react';

import { Button } from '@/shared/ui';
import type { ProjectButtonProps } from '@/shared/ui/project-button';

export const ProjectButton: FC<ProjectButtonProps> = ({
  onClick,
  type,
  disabled,
  variant,
  size,
  shape,
  className,
  fullWidth,
  maxWidth,
  label,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      shape={shape}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      className={className}
      maxWidth={maxWidth}
    >
      {label}
    </Button>
  );
};
