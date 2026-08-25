import type { ProjectsHeaderProps, Status } from '@types';

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
