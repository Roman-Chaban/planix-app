import type { FC } from "react";

import styles from "./styles.module.scss";

import type { GridProps } from "./model/types";

export const Grid: FC<GridProps> = ({ children, className }) => {
  const classes = [styles.grid, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};
