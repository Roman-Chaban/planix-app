import type { ActionItems } from '@/shared/ui/actions-bar/model/types';

import { TrashIcon, EyeIcon, EditIcon } from '@/shared/ui/icons';

export const createProjectRowActions = ({
  onView,
  onEdit,
  onDelete,
}: {
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) => {
  return (id: string): ActionItems => [
    {
      id: 'eye',
      icon: EyeIcon,
      onClick: () => onView(id),
    },
    {
      id: 'edit',
      icon: EditIcon,
      onClick: () => onEdit(id),
    },
    {
      id: 'trash',
      icon: TrashIcon,
      onClick: () => onDelete(id),
    },
  ];
};
