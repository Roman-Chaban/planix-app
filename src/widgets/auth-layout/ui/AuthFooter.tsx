import type { FC } from "react";

import { Box } from "@/shared/ui/box";
import { AppLink } from "@/shared/ui/link/AppLink";
import { Typography } from "@/shared/ui/typography/Typography";
import type { AuthFooterProps } from "@/widgets/auth-layout/model/auth-layout.types";

import styles from "./auth-footer.module.scss";


export const AuthFooter: FC<AuthFooterProps> = ({ title, link }) => {
  return (
    <Box className={styles.wrapper}>
      <Typography as="span">{title}</Typography>
      <AppLink href="" className={styles.link}>
        {link}
      </AppLink>
    </Box>
  );
};
