import { isClassObject, isStringValue, type ClassValue } from '@/shared/lib/classnames';

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
