'use client';

import { useEffect } from 'react';

import type { UseEscapeKeyParams } from '@/shared/lib/hooks/model/types';

export const useEscapeKey = ({ enabled, onEscape }: UseEscapeKeyParams) => {
  useEffect(() => {
    if (!enabled) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onEscape();
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [enabled, onEscape]);
};
