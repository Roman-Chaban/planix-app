import type { ProjectRowActionsFactory, ProjectRowActionsConfig } from '@/features/project-table';
import type { ActionItems } from '@/shared/ui/actions-bar/model/types';

import { DeleteIcon, ViewIcon, EditIcon } from '@/shared/ui/icons';

export const createProjectRowActions = ({
  onView,
  onEdit,
  onDelete,
}: ProjectRowActionsConfig): ProjectRowActionsFactory => {
  return (projectSlug: string, projectId: string | number): ActionItems => [
    {
      id: 'view',
      icon: ViewIcon,
      onClick: () => onView(projectSlug),
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
