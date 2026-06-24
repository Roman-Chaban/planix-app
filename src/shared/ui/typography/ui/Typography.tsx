import type { TypographyProps } from '../model/types';

import { forwardRef } from 'react';

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as: Component = 'span', children, className, testId, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={className}
        data-testid={testId}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = 'Typography';
