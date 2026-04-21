import type { FC } from "react";

import type { TypographyProps } from "./model/typography.types";

export const Typography: FC<TypographyProps> = ({
  as = "span",
  children,
  id = "",
  className = "",
}) => {
  const Component = as;

  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
};
