import type { BaseSyntheticEvent, ReactNode } from 'react';

import type { WithChildren } from '@/shared/types/types';

export type AuthWrapperProps = Partial<
  WithChildren & {
    onSubmit: (event?: BaseSyntheticEvent) => Promise<void>;
    header: ReactNode;
    footer: ReactNode;
  }
>;
