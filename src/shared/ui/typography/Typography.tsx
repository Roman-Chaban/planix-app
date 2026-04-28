import type { TypographyProps } from './model/types';

import type { FC } from 'react';

export const Typography: FC<TypographyProps> = ({
  as = 'span',
  children,
  id = '',
  className = '',
  onClick,
}) => {
  const Component = as;

  return (
    <Component id={id} className={className} onClick={onClick}>
      {children}
    </Component>
  );
};
