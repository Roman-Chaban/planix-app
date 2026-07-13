import type { SVGComponent } from '@types';

import type { TabId } from '@/widgets/project-management/ui/layout/model/types';
import type { Status } from '@/entities/project';

export type StatusMap = Record<TabId, Status | null>;
export type StatusClasses = Record<Status, string>;
export type StatusIcons = Record<Status, SVGComponent>;
export type StatusColor = Status;

export type StatusBadgeProps = { status: Status };
