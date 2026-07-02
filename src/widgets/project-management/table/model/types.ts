import type { toProjectTableItem } from '@/entities/project/model/project-table-item';
import type { Project } from '@/entities/project/model/types';
import type { ActionItem } from '@/shared/ui/actions-bar/model/types';

export type TableColumn = {
  key: keyof Project | 'actions';
  label: string;
};

export type TableHeaderProps = {
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

export type TableRowProps = {
  project: Project;
  actionsFactory: (name: string, id: string | number) => ActionItem[];
};

export type TableProps = {
  projects: TableItem[];
  onDelete: (id: string | number) => void;
};

export type TableItem = ReturnType<typeof toProjectTableItem>;
