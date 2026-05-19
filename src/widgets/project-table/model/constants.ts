import type { TableColumn } from '@/widgets/project-table/model/types';

export const getProjectTableColumns = (isShowReason: boolean): TableColumn[] => {
  return [
    { key: 'client', label: 'ProjectTable.TableColumns.clientName' },
    { key: 'name', label: 'ProjectTable.TableColumns.projectName' },
    { key: 'dueDate', label: 'ProjectTable.TableColumns.dueDate' },
    { key: 'platform', label: 'ProjectTable.TableColumns.platform' },
    { key: 'progressText', label: 'ProjectTable.TableColumns.progress' },
    { key: 'formattedPrice', label: 'ProjectTable.TableColumns.price' },

    ...(isShowReason
      ? [
          {
            key: 'reason' as const,
            label: 'ProjectTable.TableColumns.reason',
          },
        ]
      : []),

    { key: 'status', label: 'ProjectTable.TableColumns.status' },
    { key: 'actions', label: 'ProjectTable.TableColumns.action' },
  ];
};

export const PROJECT_REASONS = {
  CLIENT_CANCELED: 'Client canceled due to delay',
  CLIENT_UNRESPONSIVE: 'Client unresponsive',
  BUDGET_ISSUE: 'Client budget issue',
  SCOPE_CHANGE: 'Scope change requested',
  REQUIREMENT_MISMATCH: 'Requirement mismatch',
} as const;
