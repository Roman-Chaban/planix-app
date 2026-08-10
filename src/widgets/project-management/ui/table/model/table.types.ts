import type { toProjectTableItem } from '@/entities/project';

export type ProjectsTableProps = {
  projects: TableItem[];
  onDelete: (id: string | number) => void;
};

export type TableItem = ReturnType<typeof toProjectTableItem>;
