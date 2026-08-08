import type { WithChildren } from '@types';

import type { ReactNode } from 'react';

export type PageWrapperProps = WithChildren & {
  header: ReactNode;
  sectionClassName?: string;
};
