import type { FC } from "react";

import styles from "./grid.module.scss";

import type { GridItemProps } from "./model/grid.types";

export const GridItem: FC<GridItemProps> = ({
  children,
  span = 12,
  className,
}) => {
  const spanClass = styles[`col-span-${span}`];

  const classes = [styles.item, spanClass, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};
