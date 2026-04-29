import type { BoxProps } from './model/types';

import type { ElementType } from 'react';

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
