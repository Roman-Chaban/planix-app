import type { ActionItem } from '@/shared/ui/actions-bar/model/types';
import { EyeIcon, EditIcon, TrashIcon } from '@/shared/ui/icons';

export const projectActions = (onDelete: (id: string) => void, projectId: string): ActionItem[] => [
  {
    id: 'eye',
    icon: EyeIcon,
    onClick: () => {},
  },
  {
    id: 'edit',
    icon: EditIcon,
    onClick: () => {},
  },
  {
    id: 'trash',
    icon: TrashIcon,
    onClick: () => onDelete(projectId),
  },
];
