import type { FC } from "react";

import styles from "./styles.module.scss";

import type { GridItemProps } from "./model/types";
import { classNames } from "@/shared/lib/helpers/class-names";
import { Box } from "@/shared/ui/index";

export const GridItem: FC<GridItemProps> = ({
  children,
  span = 12,
  className,
}) => {
  const SPAN_CLASS = styles[`col-span-${span}`];

  const classes = classNames(styles.item, SPAN_CLASS, className);

  return <Box className={classes}>{children}</Box>;
};
