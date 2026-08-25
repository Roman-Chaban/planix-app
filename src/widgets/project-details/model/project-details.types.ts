import type { TranslateFn } from '@types';

import type { Project } from '@/entities/project';

export type BaseDetailsProps = {
  project: Project;
};

export type DetailsLayoutProps = BaseDetailsProps;
export type ProjectDetailsProps = BaseDetailsProps;

export type ProjectDetailsMapOptions = {
  project: Project;
  t: TranslateFn;
  lng: string;
};
