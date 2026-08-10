import type { Status, TabId } from '@types';

import type { ComponentType } from 'react';

export type TabsContent = Record<TabId, ComponentType>;
export type StatusMap = Record<TabId, Status | null>;
