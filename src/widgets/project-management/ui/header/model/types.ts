import type { ToolbarHeaderItemProps } from '@/widgets/project-management';
import type { Status } from '@/entities/project';

export type HeaderProps = {
  title: string;
  metaInfo: {
    label: string;
    value: string;
  };
  translationNamespace?: string;
  status?: Status;
  showStatus?: boolean;
};

export type HeaderItems = ToolbarHeaderItemProps[];
