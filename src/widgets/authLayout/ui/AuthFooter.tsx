import type { FC } from "react";

import type { AuthFooterProps } from "@/widgets/authLayout/model/types";

import { Box, AppLink, Typography } from "@/shared/ui/index";

import styles from "./styles.module.scss";

export const AuthFooter: FC<AuthFooterProps> = ({ title, link }) => {
  return (
    <Box className={styles.footer}>
      <Typography as="span" className={styles.text}>
        {title}
      </Typography>

      {/* Mock: [Added the correct link when it will need] */}
      <AppLink href="/#" className={styles.link}>
        {link}
      </AppLink>
    </Box>
  );
};
