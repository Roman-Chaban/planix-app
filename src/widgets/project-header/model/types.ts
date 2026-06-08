import type { Status } from '@/entities/project';

export type ProjectHeaderProps = {
  title: string;
  metaInfo: {
    label: string;
    value: string;
  };
  translationNamespace?: string;
  status?: Status;
  showStatus?: boolean;
};
