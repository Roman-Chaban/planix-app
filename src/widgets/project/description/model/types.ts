import type { ProjectFile } from '@/entities/project';

export type DescriptionProps = {
  description: string;
  documentTitle: string;
  files: (ProjectFile | File)[];
};
