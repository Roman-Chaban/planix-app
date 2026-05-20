import type { ReactNode } from 'react';

type BaseLoginProps = {
  title: string;
};

export type LoginHeaderProps = BaseLoginProps & {
  highlightedText?: string;
  subtitle?: string;
  icon?: ReactNode;
};

export type LoginFooterProps = BaseLoginProps & {
  link: string;
};
