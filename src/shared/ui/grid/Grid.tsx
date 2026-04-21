import type { FC } from "react";

import styles from "./grid.module.scss";

import type { GridProps } from "./model/grid.types";

export const Grid: FC<GridProps> = ({ children, className }) => {
  const classes = [styles.grid, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};
