import type { FC } from 'react';

import { Box } from '@/shared/ui/index';
import type { ModalActionsProps } from '@/shared/ui/modal/Modal.types';

export const ModalActions: FC<ModalActionsProps> = ({ children, className }) => {
  return <Box className={className}>{children}</Box>;
};
