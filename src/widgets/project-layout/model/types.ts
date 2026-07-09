import type { ComponentType } from 'react';

import type { Status } from '@/entities/project';

export type ProjectsLayoutFormValues = {
  search: string;
};

export type TabId =
  'AllProjects' | 'In Progress' | 'Pending' | 'Completed' | 'Canceled';
export type TabsContent = Record<TabId, ComponentType>;
export type StatusMap = Record<TabId, Status | null>;
