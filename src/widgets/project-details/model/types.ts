import type { ProjectDBRow } from '@/widgets/project-table/model/types';

export type BaseLayoutProps = {
  project: ProjectDBRow;
};

export type ProjectDetailsLayoutProps = BaseLayoutProps;
export type ProjectDetailsProps = BaseLayoutProps;
