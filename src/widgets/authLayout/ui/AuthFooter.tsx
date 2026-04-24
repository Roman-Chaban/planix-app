import type { FC } from "react";

import { Box, AppLink, Typography } from "@/shared/ui/index";
import type { AuthFooterProps } from "@/widgets/auth-layout/model/types";

import styles from "./styles.module.scss";

export const AuthFooter: FC<AuthFooterProps> = ({ title, link }) => {
  return (
    <Box className={styles.footerWrapper}>
      <Typography as="span" className={styles.footerTitle}>
        {title}
      </Typography>

      {/* Mock: [Added the correct link when it will need] */}
      <AppLink href="/#" className={styles.footerLink}>
        {link}
      </AppLink>
    </Box>
  );
};
