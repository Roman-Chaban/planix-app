import type { ElementType } from "react";

import type { BoxProps } from "./types";

export const Box = <T extends ElementType = "div">({
  as,
  children,
  className,
}: BoxProps<T>) => {
  const Component = as || "div";

  return <Component className={className}>{children}</Component>;
};
