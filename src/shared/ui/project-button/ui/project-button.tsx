'use client';

import type { ProjectButtonProps } from '../model/types';

import { Button } from '../../button';

export const ProjectButton = ({
  type,
  isLoading,
  disabled,
  className,
  label,
  preset,
  onClick,
}: ProjectButtonProps) => {
  return (
    <Button
      preset={preset}
      type={type}
      onClick={onClick}
      disabled={disabled}
      isLoading={isLoading}
      className={className}
    >
      {label}
    </Button>
  );
};
