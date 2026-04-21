import type { ReactNode } from "react";

export type AuthHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
};

export type AuthFooterProps = {
  title: string;
  link: string;
};
