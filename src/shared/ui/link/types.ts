import type { AnchorHTMLAttributes, ReactNode } from "react";

export type LinkProps = {
  children: ReactNode;
  href: string;
  underline?: boolean;
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
