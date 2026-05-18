import type { FC, SVGProps } from 'react';

export type ActionsBarProps = {
  onTrashClick?: () => void;
};

export type Action = {
  id: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
};

export type Actions = Action[];
