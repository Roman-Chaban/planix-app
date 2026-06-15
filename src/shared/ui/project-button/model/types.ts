import type { ComponentProps } from 'react';

import type { Button } from '@/shared/ui';

export type ProjectButtonProps = Pick<
  ComponentProps<typeof Button>,
  | 'onClick'
  | 'variant'
  | 'size'
  | 'fullWidth'
  | 'disabled'
  | 'type'
  | 'shape'
  | 'className'
  | 'isLoading'
  | 'maxWidth'
> & {
  translationNamespace?: string;
};
