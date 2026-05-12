import { type ProjectTableItem } from '@/features/projects/model/types';

export type TableColumn = {
  key: keyof ProjectTableItem | 'actions';
  label: string;
};

export type ProjectTableHeaderProps = {
  columns: TableColumn[];
};

export type ProjectsTableProps = {
  projects: ProjectTableItem[];
};
