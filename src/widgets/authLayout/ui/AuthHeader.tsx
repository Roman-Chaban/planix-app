import type { FC } from "react";

import { Avatar, Box, Typography } from "@/shared/ui/index";
import type { AuthHeaderProps } from "@/widgets/authLayout/model/types";

import styles from "./styles.module.scss";

export const AuthHeader: FC<AuthHeaderProps> = ({
  title,
  subtitle,
  decorationText,
  icon,
}) => {
  return (
    <Box className={styles.headerWrapper}>
      <Typography as="h1" className={styles.title}>
        {title}{" "}
        <Typography as="span" className={styles.decorationText}>
          {decorationText}
        </Typography>
      </Typography>

      {icon && <Avatar icon={icon} />}
      {subtitle && (
        <Typography as="p" className={styles.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
