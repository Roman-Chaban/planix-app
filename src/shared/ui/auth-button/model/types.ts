import type { ButtonHTMLAttributes } from 'react';

export type AuthButtonProps = {
  label: string;
  maxWidth?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;
