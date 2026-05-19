import type { TableColumn } from '@/widgets/project-table/model/types';

export const getProjectTableColumns = (isShowReason: boolean): TableColumn[] => {
  return [
    { key: 'client', label: 'projects.table.columns.clientName' },
    { key: 'name', label: 'projects.table.columns.projectName' },
    { key: 'dueDate', label: 'projects.table.columns.dueDate' },
    { key: 'platform', label: 'projects.table.columns.platform' },
    { key: 'progressText', label: 'projects.table.columns.progress' },
    { key: 'formattedPrice', label: 'projects.table.columns.price' },

    ...(isShowReason
      ? [
          {
            key: 'reason' as const,
            label: 'projects.table.columns.reason',
          },
        ]
      : []),

    { key: 'status', label: 'projects.table.columns.status' },
    { key: 'actions', label: 'projects.table.columns.action' },
  ];
};

export const PROJECT_REASONS = {
  CLIENT_CANCELED: 'Client canceled due to delay',
  CLIENT_UNRESPONSIVE: 'Client unresponsive',
  BUDGET_ISSUE: 'Client budget issue',
  SCOPE_CHANGE: 'Scope change requested',
  REQUIREMENT_MISMATCH: 'Requirement mismatch',
} as const;
