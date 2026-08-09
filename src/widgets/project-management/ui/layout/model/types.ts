import type { TabId } from '@types';

import type { ComponentType } from 'react';

import type { Status } from '@/entities/project';

export type TabsContent = Record<TabId, ComponentType>;
export type StatusMap = Record<TabId, Status | null>;
