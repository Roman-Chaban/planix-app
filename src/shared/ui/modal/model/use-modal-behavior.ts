import type { UseModalBehaviorParams } from '../model/types';

import { useLockBodyScroll, useEscapeKey } from '@/shared/lib/hooks/index';

export const useModalBehavior = ({ isOpen, onClose }: UseModalBehaviorParams) => {
  useEscapeKey({
    enabled: isOpen,
    onEscape: onClose,
  });

  useLockBodyScroll(isOpen);
};
