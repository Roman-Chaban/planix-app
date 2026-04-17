import type { FC } from "react";
import Image from "next/image";

import { Box } from "@shared/ui/box/Box";
import type { AvatarProps } from "./types";

import styles from "./avatar.module.scss";

export const Avatar: FC<AvatarProps> = ({
  src,
  icon,
  alt = "avatar",
  size = "md",
  variant = "circle",
  fallback,
  className,
}) => {
  const classNameValue = [
    styles.avatar,
    styles[size],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Box className={classNameValue}>
      {icon ? (
        <Box className={styles.icon}>{icon}</Box>
      ) : src ? (
        <Image src={src} alt={alt} fill className={styles.image} />
      ) : (
        <Box className={styles.fallback}>{fallback ?? "?"}</Box>
      )}
    </Box>
  );
};
