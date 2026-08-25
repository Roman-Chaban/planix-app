import type { FileType } from '@types';

import type { ComponentType } from 'react';

import type { ProjectFile } from '@/entities/project';

export type FileItemProps = {
  file: ProjectFile | File;
};

export type FileConfiguration = Record<string, { icon: ComponentType; type: FileType }>;
