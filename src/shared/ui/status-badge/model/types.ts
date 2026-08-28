import type { SVGComponent, TabId } from '@types';

import type { Status } from '@/shared/lib/common/constants';

export type StatusMap = Record<TabId, Status | null>;
export type StatusClasses = Record<Status, string>;
export type StatusIcons = Record<Status, SVGComponent>;
export type StatusColor = Status;

export type StatusBadgeProps = { status: Status };
