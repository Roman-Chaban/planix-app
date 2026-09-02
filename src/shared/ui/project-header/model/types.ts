import type { ProjectsHeaderProps } from '@types';

import type { Status } from '@/shared/lib/common/constants';

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

export type HeaderItems = ProjectsHeaderProps[];
