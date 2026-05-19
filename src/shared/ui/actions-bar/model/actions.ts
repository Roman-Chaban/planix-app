import type { Actions } from '@/shared/ui/actions-bar/model/types';
import { EyeIcon, EditIcon, TrashIcon } from '@/shared/ui/icons/index';

export const createActions = (onTrashClick?: () => void): Actions => [
  {
    id: 'eye',
    icon: EyeIcon,
  },
  {
    id: 'edit',
    icon: EditIcon,
  },
  {
    id: 'trash',
    icon: TrashIcon,
    onClick: onTrashClick,
  },
];
