import { useLockBodyScroll, useEscapeKey } from '@/shared/hooks/index';
import type { UseModalBehaviorParams } from '@/shared/hooks/model/types';

export const useModalBehavior = ({ isOpen, onClose }: UseModalBehaviorParams) => {
  useEscapeKey({
    enabled: isOpen,
    onEscape: onClose,
  });

  useLockBodyScroll(isOpen);
};
