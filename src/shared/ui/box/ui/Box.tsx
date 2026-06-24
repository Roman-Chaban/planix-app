import type { ElementType } from 'react';

import type { BoxProps } from '@/shared/ui/box';

export const Box = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...boxProps
}: BoxProps<T>) => {
  const Component = as || 'div';

  return (
    <Component className={className} {...boxProps}>
      {children}
    </Component>
  );
};
