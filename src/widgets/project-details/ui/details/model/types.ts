import type { TFunction } from 'i18next';

import type { ReactNode } from 'react';

import type { Project } from '@/entities/project';

export type ProjectDetailsMapOptions = {
  project: Project;
  t: TFunction;
  lng: string;
};

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
