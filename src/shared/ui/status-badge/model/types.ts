import type { FC, SVGProps } from 'react';

import type { TabId } from '@/widgets/project-layout/model/types';

export type Status = 'Pending' | 'In Progress' | 'Completed' | 'Canceled';
export type StatusMap = Record<TabId, Status | null>;
export type StatusClasses = Record<Status, string>;
export type StatusIcons = Record<Status, FC<SVGProps<SVGSVGElement>>>;
export type StatusColor = Status;

export type StatusBadgeProps = { status: Status };
