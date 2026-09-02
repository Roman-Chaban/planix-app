import type { Axis } from './constants';
import type { Breakpoint } from '../../common/constants';
import type { FieldValues, UseFormProps } from 'react-hook-form';

import type { ZodType } from 'zod';

export type Point = { x: number; y: number };
export type ScrollPosition = { left: number; top: number };

export type UseEscapeKeyParams = {
  enabled: boolean;
  onEscape: () => void;
};

export type UseDragScrollOptions = {
  axis?: Axis;
  disabled?: boolean;
  momentum?: boolean;
  scrollSpeed?: number;
  dragThreshold?: number;
};

export type UseAppFormProps<T extends FieldValues> = Omit<UseFormProps<T>, 'resolver'> & {
  schema: ZodType<T, T>;
};

export type UseResponsiveValueOptions<T> = {
  largeScreenValue: T;
  smallScreenValue: T;
  breakpoint: Breakpoint;
};
