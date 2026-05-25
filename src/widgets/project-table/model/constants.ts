import type { TableColumn } from '@/widgets/project-table/model/types';

export const getProjectTableColumns = (isShowReason: boolean): TableColumn[] => {
  return [
    { key: 'client', label: 'clientName' },
    { key: 'name', label: 'projectName' },
    { key: 'dueDate', label: 'dueDate' },
    { key: 'platform', label: 'platform' },
    { key: 'progressText', label: 'progress' },
    { key: 'formattedPrice', label: 'price' },

    ...(isShowReason
      ? [
          {
            key: 'reason' as const,
            label: 'reason',
          },
        ]
      : []),

    { key: 'status', label: 'status' },
    { key: 'actions', label: 'action' },
  ];
};

export const PROJECT_REASONS = {
  CLIENT_CANCELED: 'Client canceled due to delay',
  CLIENT_UNRESPONSIVE: 'Client unresponsive',
  BUDGET_ISSUE: 'Client budget issue',
  SCOPE_CHANGE: 'Scope change requested',
  REQUIREMENT_MISMATCH: 'Requirement mismatch',
} as const;
