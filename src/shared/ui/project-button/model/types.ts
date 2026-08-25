import type { ComponentProps } from 'react';

import type { Button } from '@/shared/ui';

export type ProjectButtonProps = Pick<
  ComponentProps<typeof Button>,
  'onClick' | 'disabled' | 'type' | 'className' | 'preset'
> & {
  label: string;
  translationNamespace?: string;
};
