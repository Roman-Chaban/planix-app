import type { WithChildren } from '@types';

import type { ReactNode } from 'react';

export type PageWrapperProps = {
  header: ReactNode;
  sectionClassName?: string;
} & WithChildren;
