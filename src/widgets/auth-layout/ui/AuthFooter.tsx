import type { FC } from "react";

import { Box, AppLink, Typography } from "@/shared/ui/index";
import type { AuthFooterProps } from "@/widgets/auth-layout/model/auth-layout.types";

import styles from "./auth-layout.module.scss";

export const AuthFooter: FC<AuthFooterProps> = ({ title, link }) => {
  return (
    <Box className={styles.footerWrapper}>
      <Typography as="span">{title}</Typography>

      {/* Mock: [Added the correct link when it will need] */}
      <AppLink href="/#" className={styles.link}>
        {link}
      </AppLink>
    </Box>
  );
};
