import type { TableColumn } from '@/widgets/project-management/ui/table';
import type { TranslateFn } from '@/shared/types/types';

export const getTableColumns = (t: TranslateFn): TableColumn[] => {
  return [
    { key: 'client_name', label: t('tableHeader.clientName') },
    { key: 'project_name', label: t('tableHeader.projectName') },
    { key: 'due_date', label: t('tableHeader.dueDate') },
    { key: 'platform', label: t('tableHeader.platform') },
    { key: 'progress', label: t('tableHeader.progress') },
    { key: 'price', label: t('tableHeader.price') },
    { key: 'status', label: t('tableHeader.status') },
    { key: 'actions', label: t('tableHeader.action') },
  ];
};
