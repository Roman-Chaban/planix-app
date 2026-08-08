import type { ClassValue } from '@/shared/lib/classnames';

export const isStringValue = (input: ClassValue): input is string => {
  return typeof input === 'string';
};
