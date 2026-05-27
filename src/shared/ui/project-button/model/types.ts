import type { ButtonHTMLAttributes } from 'react';

export type ProjectButtonProps = {
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
