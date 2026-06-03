import type { ReactNode } from 'react';

export type DetailsInfoListProps = {
  details: {
    id: string;
    label: string;
    value: string;
  }[];
};

export type DetailsDescriptionProps = {
  description: string;
  documentTitle: string;
};

export type DetailsCardProps = {
  className?: string;
  titleClassName?: string;
  title: string;
  children: ReactNode;
};
