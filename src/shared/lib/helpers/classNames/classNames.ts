import type { ClassObject, ClassValue } from './model/types';

const isString = (value: ClassValue): value is string => {
  return typeof value === 'string';
};

const isObject = (value: ClassValue): value is ClassObject => {
  return typeof value === 'object' && value !== null;
};

export const classNames = (...values: ClassValue[]): string => {
  const result: string[] = [];

  for (const value of values) {
    if (!value) continue;

    if (isString(value)) {
      result.push(value);
      continue;
    }

    if (isObject(value)) {
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          if (value[key]) {
            result.push(key);
          }
        }
      }
    }
  }

  return result.join(' ');
};
