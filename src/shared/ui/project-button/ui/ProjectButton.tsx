'use client';

import { Button } from '@/shared/ui';
import type { ProjectButtonProps } from '@/shared/ui/project-button';

export const ProjectButton = ({
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
}: ProjectButtonProps) => {
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
