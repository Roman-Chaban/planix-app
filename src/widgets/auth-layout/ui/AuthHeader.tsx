import type { FC } from "react";

import { Avatar } from "@/shared/ui/avatar";
import { Box } from "@/shared/ui/box";
import { Typography } from "@/shared/ui/typography/Typography";
import type { AuthHeaderProps } from "@/widgets/auth-layout/model/auth-layout.types";

import styles from "./auth-header.module.scss";

export const AuthHeader: FC<AuthHeaderProps> = ({
  title,
  subtitle,
  decorationText,
  icon,
}) => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.wrapperInfo}>
        <Typography as="h1" className={styles.title}>
          {title}{" "}
          <Typography as="span" className={styles.decorationText}>
            {decorationText}
          </Typography>
        </Typography>
        {icon && <Avatar icon={icon} />}
      </Box>
      {subtitle && (
        <Typography as="p" className={styles.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
