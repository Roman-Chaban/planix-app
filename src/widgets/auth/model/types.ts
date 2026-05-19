import type { ReactNode } from 'react';

type BaseAuthProps = {
  title: string;
};

export type AuthHeaderProps = BaseAuthProps & {
  highlightedText?: string;
  subtitle?: string;
  icon?: ReactNode;
};

export type AuthFooterProps = BaseAuthProps & {
  link: string;
};
