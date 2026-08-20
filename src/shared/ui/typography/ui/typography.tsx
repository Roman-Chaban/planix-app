import type { TypographyProps } from '../model/types';

import { forwardRef, type ElementType } from 'react';

export const Typography = forwardRef(
  <T extends ElementType = 'span'>(
    { as, testId, ...props }: TypographyProps<T>,
    ref: React.Ref<Element>,
  ) => {
    const Component = as ?? 'span';

    return <Component ref={ref} data-testid={testId} {...props} />;
  },
);

Typography.displayName = 'Typography';
