import type { SVGComponent } from '@/shared/types/types';

export type ActionItem = {
  id: string;
  icon: SVGComponent;
  onClick: () => void;
};

export type ActionsBarProps = {
  actions: ActionItem[];
};

export type ActionItems = ActionItem[];
