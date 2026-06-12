import type { ButtonHTMLAttributes } from 'react';

export type AuthButtonProps = {
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
