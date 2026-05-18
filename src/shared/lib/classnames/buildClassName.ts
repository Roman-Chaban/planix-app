import type { ClassObject, ClassValue } from './buildClassName.types';

const isStringValue = (input: ClassValue): input is string => {
  return typeof input === 'string';
};

const isClassObject = (input: ClassValue): input is ClassObject => {
  return typeof input === 'object' && input !== null;
};

export const buildClassName = (...classValues: ClassValue[]): string => {
  const classList: string[] = [];

  for (const classValue of classValues) {
    if (!classValue) continue;

    if (isStringValue(classValue)) {
      classList.push(classValue);
      continue;
    }

    if (isClassObject(classValue)) {
      for (const className in classValue) {
        if (Object.prototype.hasOwnProperty.call(classValue, className)) {
          if (classValue[className]) {
            classList.push(className);
          }
        }
      }
    }
  }

  return classList.join(' ');
};
