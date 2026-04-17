import type { FC } from "react";
import type { GridItemProps } from "./types";

import styles from "./grid.module.scss";

export const GridItem: FC<GridItemProps> = ({
  children,
  span = 12,
  className,
}) => {
  const spanClass = styles[`col-span-${span}`];

  const classes = [styles.item, spanClass, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};
