import styles from '@/widgets/auth/ui/Auth.module.scss';
import { BrandBanner } from '@/widgets/brand-banner/ui/BrandBanner';
import { LoginForm } from '@/features/auth-by-credentials/ui/LoginForm/LoginForm';

import { Box, Grid, GridItem } from '@/shared/ui/index';

export const AuthLayout = () => {
  return (
    <Box className={styles.layout}>
      <Grid className={styles.grid}>
        <GridItem span={7} className={styles.banner}>
          <BrandBanner />
        </GridItem>

        <GridItem span={5} className={styles.form}>
          <LoginForm />
        </GridItem>
      </Grid>
    </Box>
  );
};
