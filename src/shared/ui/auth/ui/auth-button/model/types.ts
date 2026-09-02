import type { WithClassName } from '@types';

import type { ButtonHTMLAttributes } from 'react';

import type { ButtonPresetKey } from '@/shared/ui/button';

export type AuthButtonProps = {
  label: string;
  isLoading?: boolean;
  preset: ButtonPresetKey;
} & WithClassName &
  ButtonHTMLAttributes<HTMLButtonElement>;
