import { type ProjectTableItem } from '@/entities/project/model/types';

export type TableColumn = {
  key: keyof ProjectTableItem | 'actions';
  label: string;
};

export type ProjectTableHeaderProps = {
  columns: TableColumn[];
};

export type ProjectRowProps = {
  project: ProjectTableItem;
  onTrashClick?: () => void;
};

export type ProjectsTableProps = {
  projects: ProjectTableItem[];
  onTrashClick: (id: string) => void;
};
