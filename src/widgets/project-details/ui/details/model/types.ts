import type { TFunction } from 'i18next';

import type { JSX, ReactNode } from 'react';

import type { Project, ProjectFile } from '@/entities/project';

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
  files: (ProjectFile | File)[];
};

export type DetailsCardProps = {
  className?: string;
  titleClassName?: string;
  title: string;
  children: ReactNode;
};

export type FileItemProps = {
  file: ProjectFile | File;
};

export type FileConfiguration = Record<
  string,
  { icon: JSX.Element; type: FileType }
>;
export type FileType = 'pdf' | 'image' | 'default';
