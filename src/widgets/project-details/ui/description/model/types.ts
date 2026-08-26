import type { ProjectFile } from '@/entities/projects';

export type DescriptionProps = {
  description: string;
  documentTitle: string;
  files: (ProjectFile | File)[];
};
