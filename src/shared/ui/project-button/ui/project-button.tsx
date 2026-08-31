'use client';

import type { ProjectButtonProps } from '../model/types';

import { Button } from '../../button';

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
