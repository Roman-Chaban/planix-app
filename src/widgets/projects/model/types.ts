import type { ComponentType } from 'react';

import type { ProjectStatus } from '@/features/projects/model/types';

export type TabId = 'allProjects' | 'inProgress' | 'pending' | 'completed' | 'canceled';
export type TabsContent = Record<TabId, ComponentType>;
export type StatusMap = Record<TabId, ProjectStatus | null>;

export type ProjectDeleteModalProps = {
  projectId: string | null;
  isOpen: boolean;
  onClose: () => void;
};
