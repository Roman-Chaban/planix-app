import type { ReactNode } from 'react';

import type { Project } from '@/widgets/project-table/model/types';

export type BaseLayoutProps = {
  project: Project;
};

export type ProjectDetailsLayoutProps = BaseLayoutProps;
export type ProjectDetailsProps = BaseLayoutProps;

export type ProjectDetailsCardProps = {
  className?: string;
  titleClassName?: string;
  title: string;
  children: ReactNode;
};
