import type { ButtonHTMLAttributes } from 'react';

import type { ButtonVariant } from '@/shared/ui/button/model/types';

export type ProjectButtonProps = {
  onClick?: () => void;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
