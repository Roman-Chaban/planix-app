import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type LinkProps = {
  children: ReactNode;
  href: string;
  isUnderline?: boolean;
  external?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
