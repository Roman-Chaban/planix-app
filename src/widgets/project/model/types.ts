import type { Project, ProjectFile } from '@/entities/project';
import type { TranslateFn } from '@/shared/types/types';

export type BaseDetailsProps = {
  project: Project;
};

export type DetailsLayoutProps = BaseDetailsProps;
export type DetailsProps = BaseDetailsProps;

export type ProjectDetailsMapOptions = {
  project: Project;
  t: TranslateFn;
  lng: string;
};

export type DescriptionProps = {
  description: string;
  documentTitle: string;
  files: (ProjectFile | File)[];
};

export type FileItemProps = {
  file: ProjectFile | File;
};
