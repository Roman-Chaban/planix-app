import type { ReactNode } from 'react';

export type InfoCardProps = {
  className?: string;
  titleClassName?: string;
  title: string;
  children: ReactNode;
};

export type InfoListProps = {
  details: {
    id: string;
    label: string;
    value: string;
  }[];
};
