import type { FC, SVGProps } from 'react';

export type ActionItem = {
  id: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
};

export type ActionsBarProps = {
  actions: ActionItem[];
};

export type ActionItems = ActionItem[];
