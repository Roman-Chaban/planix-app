import type { FC } from "react";

import { Avatar } from "@/shared/ui/avatar";
import { Box } from "@/shared/ui/box/index";
import { PlanixLogo } from "@/shared/ui/icons/Icons";
import { Typography } from "@/shared/ui/typography/Typography";

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
