import type { FC } from "react";
import type { TypographyProps } from "./types";

export const Typography: FC<TypographyProps> = ({
  as = "span",
  children,
  className,
}) => {
  const Component = as;

  return <Component className={className}>{children}</Component>;
};
