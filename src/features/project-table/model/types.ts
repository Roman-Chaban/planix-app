import type { ActionItems } from '@/shared/ui/actions-bar/model/types';

export type ProjectRowActionHandler = (projectId: string | number) => void;
export type ProjectNameHandler = (projectName: string) => void;

export type ProjectRowActionsConfig = {
  onView: ProjectNameHandler;
  onEdit: ProjectRowActionHandler;
  onDelete: ProjectRowActionHandler;
};

export type ProjectRowActionsFactory = (
  projectName: string,
  projectId: string | number,
) => ActionItems;
