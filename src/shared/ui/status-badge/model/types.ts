import type { Status, SVGComponent, TabId } from '@types';

export type StatusMap = Record<TabId, Status | null>;
export type StatusClasses = Record<Status, string>;
export type StatusIcons = Record<Status, SVGComponent>;
export type StatusColor = Status;

export type StatusBadgeProps = { status: Status };
