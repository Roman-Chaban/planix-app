import type { ProjectRowActionsFactory, ProjectRowActionsConfig } from '@/features/project-table';
import type { ActionItems } from '@/shared/ui/actions-bar/model/types';

import { DeleteIcon, EyeIcon, EditIcon } from '@/shared/ui/icons';

export const createProjectRowActions = ({
  onView,
  onEdit,
  onDelete,
}: ProjectRowActionsConfig): ProjectRowActionsFactory => {
  return (projectName: string, projectId: string): ActionItems => [
    {
      id: 'view',
      icon: EyeIcon,
      onClick: () => onView(projectName),
    },
    {
      id: 'edit',
      icon: EditIcon,
      onClick: () => onEdit(projectId),
    },
    {
      id: 'delete',
      icon: DeleteIcon,
      onClick: () => onDelete(projectId),
    },
  ];
};
