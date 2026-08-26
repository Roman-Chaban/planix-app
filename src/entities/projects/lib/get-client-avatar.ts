import type { ProjectFile } from '../model/types';

import { AVATAR_EXTENSIONS } from '@/shared/ui/avatar/lib/constants';

export const getClientAvatar = (files: ProjectFile[]): string => {
  return files.find((file) => AVATAR_EXTENSIONS.test(file.name))?.url ?? '';
};
