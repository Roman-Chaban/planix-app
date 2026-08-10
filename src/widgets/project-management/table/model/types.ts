import type { toProjectTableItem } from '@/entities/project/lib/toProjectTableItem';

export type TableProps = {
  projects: TableItem[];
  onDelete: (id: string | number) => void;
};

export type TableItem = ReturnType<typeof toProjectTableItem>;
