import type { ComponentType } from 'react';

export type TabId = 'allProjects' | 'inProgress' | 'pending' | 'completed' | 'canceled';
export type TabsContent = Record<TabId, ComponentType>;
