import type { FC } from "react";

import Image from "next/image";

import { classNames } from "@/shared/lib/helpers/class-names/class-names";
import { Box } from "@shared/ui/box/Box";

import styles from "./styles.module.scss";

import type { AvatarProps } from "./model/types";

export const Avatar: FC<AvatarProps> = ({
  src,
  icon,
  alt = "avatar",
  size = "md",
  variant = "circle",
  fallback,
  className,
}) => {
  const avatarClassNames = classNames(
    styles.avatar,
    styles[size],
    styles[variant],
    className,
  );

  return (
    <Box className={avatarClassNames}>
      {icon ? (
        <Box className={styles.icon}>{icon}</Box>
      ) : src ? (
        <Image src={src} alt={alt} fill className={styles.image} />
      ) : (
        <Box className={styles.fallback}>{fallback ?? "Fallback Icon"}</Box>
      )}
    </Box>
  );
};
