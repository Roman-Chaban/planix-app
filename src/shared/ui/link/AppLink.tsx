import type { FC } from "react";

import Link from "next/link";

import { LinkTargets } from "@/shared/constants/constants";
import { classNames } from "@/shared/lib/class-names";

import styles from "./app-link.module.scss";

import type { LinkProps } from "./types";

export const AppLink: FC<LinkProps> = ({
  children,
  href,
  underline = false,
  external = false,
  ...props
}) => {
  const linkClasses = classNames(styles.link, underline && styles.underline);

  if (external) {
    return (
      <a
        href={href}
        className={linkClasses}
        target={LinkTargets.BLANK}
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
};
