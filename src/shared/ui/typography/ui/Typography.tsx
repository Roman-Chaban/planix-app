import type { FC } from 'react';

import type { TypographyProps } from '@/shared/ui/typography/model/types';

export const Typography: FC<TypographyProps> = ({
  as = 'span',
  children,
  id,
  className,
  onClick,
}) => {
  const Component = as;

  return (
    <Component id={id} className={className} onClick={onClick}>
      {children}
    </Component>
  );
};
