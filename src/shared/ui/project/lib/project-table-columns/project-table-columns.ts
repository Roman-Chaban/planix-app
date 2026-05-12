import type { TableColumn } from '@/shared/ui/project/model/types';

export const projectTableColumns: TableColumn[] = [
  { key: 'client', label: 'ProjectTable.TableColumns.clientName' },
  { key: 'name', label: 'ProjectTable.TableColumns.projectName' },
  { key: 'dueDate', label: 'ProjectTable.TableColumns.dueDate' },
  { key: 'platform', label: 'ProjectTable.TableColumns.platform' },
  { key: 'progressText', label: 'ProjectTable.TableColumns.progress' },
  { key: 'formattedPrice', label: 'ProjectTable.TableColumns.price' },
  { key: 'status', label: 'ProjectTable.TableColumns.status' },
  { key: 'actions', label: 'ProjectTable.TableColumns.action' },
];
