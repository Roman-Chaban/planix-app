import type { ReactNode } from "react";

export type TypographyAs =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type TypographyProps = {
  as?: TypographyAs;
  children: ReactNode;
  className?: string;
};
