import type { ButtonHTMLAttributes } from 'react';

import type { MaxWidth } from '@/shared/ui/button';

export type AuthButtonProps = {
  label: string;
  maxWidth: MaxWidth;
} & ButtonHTMLAttributes<HTMLButtonElement>;
