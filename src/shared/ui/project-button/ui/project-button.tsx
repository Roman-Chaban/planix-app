'use client';

import type { ProjectButtonProps } from '../model/types';

import { Button } from '@/shared/ui';

export const ProjectButton = ({
  onClick,
  type,
  disabled,
  className,
  label,
  size,
  preset,
}: ProjectButtonProps) => {
  return (
    <Button
      preset={preset}
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={className}
    >
      {label}
    </Button>
  );
};
