import { type ElementType, forwardRef } from 'react';

import type { BoxProps } from '@/shared/ui/box';

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = 'div', children, className, ...props }, ref) => {
    const Tag = Component as ElementType;

    return (
      <Tag ref={ref} className={className} {...props}>
        {children}
      </Tag>
    );
  },
);

Box.displayName = 'Box';
