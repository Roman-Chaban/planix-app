import type { TFunction } from 'i18next';

import type { ReactNode } from 'react';

import type { ProjectDBRow } from '@/widgets/project-table/model/types';
import type { ProjectFile } from '@/entities/project';

export type ProjectDetailsMapOptions = {
  project: ProjectDBRow;
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
  files: ProjectFile[];
};

export type DetailsCardProps = {
  className?: string;
  titleClassName?: string;
  title: string;
  children: ReactNode;
};
