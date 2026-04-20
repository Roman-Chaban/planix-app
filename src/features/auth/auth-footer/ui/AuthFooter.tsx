import type { FC } from "react";

import { Box } from "@/shared/ui/box";
import { Typography } from "@/shared/ui/typography/Typography";

import styles from "./auth-footer.module.scss";

import type { AuthFooterProps } from "./types";
import { AppLink } from "@/shared/ui/link/AppLink";

export const AuthFooter: FC<AuthFooterProps> = ({ title, link }) => {
  return (
    <Box className={styles.wrapper}>
      <Typography as="span">{title}</Typography>
      <AppLink href="">{link}</AppLink>
    </Box>
  );
};
