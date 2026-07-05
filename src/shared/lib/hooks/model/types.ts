import type { zodResolver } from '@hookform/resolvers/zod';

import type { FieldValues, UseFormProps } from 'react-hook-form';

export type Point = { x: number; y: number };
export type ScrollPosition = { left: number; top: number };
export type Axis = 'x' | 'y' | 'both';

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

export type UseAppFormProps<T extends FieldValues> = Omit<
  UseFormProps<T>,
  'resolver'
> & {
  schema: Parameters<typeof zodResolver>[0];
};
