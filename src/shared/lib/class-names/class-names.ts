import type { ClassValue } from "./types";

export const classNames = (...values: ClassValue[]): string => {
  return values.filter(Boolean).join(" ");
};
