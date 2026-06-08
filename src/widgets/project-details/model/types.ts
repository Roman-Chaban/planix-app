import type { Project } from '@/entities/project';

export type BaseLayoutProps = {
  project: Project;
};

export type ProjectDetailsLayoutProps = BaseLayoutProps;
export type ProjectDetailsProps = BaseLayoutProps;
