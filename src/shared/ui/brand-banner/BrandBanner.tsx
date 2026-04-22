import type { FC } from "react";

import { Avatar, Box, Typography } from "@/shared/ui/index";
import { PlanixLogo } from "@/shared/ui/icons/Icons";

import styles from "./brand-banner.module.scss";

export const BrandBanner: FC = () => {
  return (
    <Box className={styles.banner}>
      <Box className={styles.logoContainer}>
        <Avatar alt="Palnix Logo" icon={<PlanixLogo />} />

        <Typography as="span" className={styles.logoCapture}>
          Planix
        </Typography>
      </Box>
      <Typography as="h5" className={styles.logoHeading}>
        Empowering You to Plan, Track, and Deliver with Clarity
      </Typography>
    </Box>
  );
};
