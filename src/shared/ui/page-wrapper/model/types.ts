import type { ReactNode } from 'react';

import type { WithChildren } from '@/shared/types/types';

export type PageWrapperProps = WithChildren & {
  header: ReactNode;
  sectionClassName?: string;
};
