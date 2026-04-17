export type ClassPrimitive = string | number | null | undefined | false;
export type ClassObject = Record<string, boolean | undefined | null>;
export type ClassValue = ClassPrimitive | ClassObject;
