import type { Project } from '@/entities/project/model/types';
import type { ActionItem } from '@/shared/ui/actions-bar/model/types';

export type TableColumn = {
  key: keyof Project | 'actions';
  label: string;
};

export type ProjectTableHeaderProps = {
  columns: TableColumn[];
};

export type ProjectsResponse = {
  data: Project[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type ProjectTableRowProps = {
  project: Project;
  actionsFactory: (name: string, id: string | number) => ActionItem[];
  isShowReason?: boolean;
};

export type ProjectsTableProps = {
  projects: Project[];
  onDelete: (id: string | number) => void;
  isShowReason?: boolean;
};
