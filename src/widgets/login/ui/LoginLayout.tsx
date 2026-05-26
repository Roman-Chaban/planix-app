import { BrandBanner } from '@/widgets/brand-banner';

import { LoginForm } from '@/features/auth-by-credentials/ui/LoginForm';

import { Box, Grid, GridItem } from '@/shared/ui';

import styles from './Login.module.scss';

export const LoginLayout = () => {
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
