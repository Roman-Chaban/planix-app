import type { FC } from "react";
import type { GridProps } from "./types";

import styles from "./grid.module.scss";

export const Grid: FC<GridProps> = ({ children, className }) => {
  const classes = [styles.grid, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};
