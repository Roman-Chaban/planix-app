import { useLockBodyScroll, useEscapeKey } from '@/shared/lib/hooks/index';
import type { UseModalBehaviorParams } from '@/shared/ui/modal/model/types';

export const useModalBehavior = ({
  isOpen,
  onClose,
}: UseModalBehaviorParams) => {
  useEscapeKey({
    enabled: isOpen,
    onEscape: onClose,
  });

  useLockBodyScroll(isOpen);
};
