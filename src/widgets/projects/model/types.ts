import type { ActiveTabProps, Status, TabId } from '@types';

import type { ComponentType } from 'react';

import type { Project } from '@/entities/project';

export type TabsContent = Record<TabId, ComponentType>;
export type StatusMap = Record<TabId, Status | null>;

export type UsePlatformSelectOptions = ActiveTabProps & { projects: Project[] };
