import { BrandBanner } from '@/widgets/brand-banner/ui/BrandBanner';
import { LoginForm } from '@/features/auth-by-credentials/LoginForm';

import { Box, Grid, GridItem } from '@/shared/ui/index';
import styles from '@/screens/auth/ui/Auth.module.scss';

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
