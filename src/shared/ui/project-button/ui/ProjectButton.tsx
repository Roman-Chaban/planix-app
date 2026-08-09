'use client';

import { Button } from '@/shared/ui';
import type { ProjectButtonProps } from '@/shared/ui/project-button';

export const ProjectButton = ({
  onClick,
  type,
  disabled,
  className,
  label,
  preset,
}: ProjectButtonProps) => {
  return (
    <Button preset={preset} type={type} onClick={onClick} disabled={disabled} className={className}>
      {label}
    </Button>
  );
};
