import type { Status } from '@/shared/ui/status-badge/model/types';

export type ProjectHeaderProps = {
  title: string;
  metaInfo: {
    label: string;
    value: string;
  };
  translationNamespace?: string;
  status: Status;
  isStatus?: boolean;
};
