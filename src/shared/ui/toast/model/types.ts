import type { ToastVariant } from '../lib/constants';

import type { SVGComponent, WithClassName } from '@types';

import type { ReactNode } from 'react';

type ToastConfigRole = 'alert' | 'status';
type ToastConfigAriaLive = 'assertive' | 'polite';

export type ToastConfigItem = {
  Icon: SVGComponent;
  tone: string;
  role: ToastConfigRole;
  ariaLive: ToastConfigAriaLive;
};

export type ToastConfigOptions = Record<ToastVariant, ToastConfigItem>;

export type ToastProps = WithClassName & {
  variant: ToastVariant;
  description: ReactNode;
  onClose?: () => void;
  isClosing: boolean;
  onAnimationEnd: () => void;
};
