import type { ClassObject, ClassValue } from '@/shared/lib/classnames';

export const isClassObject = (input: ClassValue): input is ClassObject => {
  return typeof input === 'object' && input !== null;
};
