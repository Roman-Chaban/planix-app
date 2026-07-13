import type { ReactNode } from 'react';

import type { WithChildren } from '@types';

export type PageWrapperProps = WithChildren & {
  header: ReactNode;
  sectionClassName?: string;
};
