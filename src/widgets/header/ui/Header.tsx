'use client';

import { useRef, type FC } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { useHeaderAnimation, type HeaderProps } from '@/widgets/header';

import { LanguageSelect } from '@/features/change-language';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AppLink, Box, Button, Typography } from '@/shared/ui';
import { BUTTON_SHAPES, BUTTON_SIZES, BUTTON_TYPES } from '@/shared/ui/button';

import { NotificationErrorIcon, NotificationIcon } from '@/shared/ui/icons';

import styles from './Header.module.scss';

gsap.registerPlugin(useGSAP);

const { BUTTON } = BUTTON_TYPES;
const { CIRCLE, ROUNDED } = BUTTON_SHAPES;
const { SMALL, MEDIUM } = BUTTON_SIZES;

const { AUTH } = ROUTES;

export const Header: FC<HeaderProps> = ({ title }) => {
  const { t } = useTranslation(NS.HEADER);

  const scopeRef = useRef<HTMLElement>(null);

  useHeaderAnimation({
    scopeRef,
  });

  return (
    <header ref={scopeRef} className={styles.header}>
      <Box className={styles.wrapper}>
        <Box className={styles.headerRightSide}>
          <Typography data-animate="title" as="h1" className={styles.title}>
            {t(title)}
          </Typography>
          <Box data-animate="actions" className={styles.headerAuth}>
            <LanguageSelect />

            <Button
              type={BUTTON}
              shape={CIRCLE}
              size={SMALL}
              className={styles.button}
              endIcon={<NotificationErrorIcon />}
              endIconClassName={styles.endIcon}
            >
              <NotificationIcon />
            </Button>

            <Button type={BUTTON} size={MEDIUM} shape={ROUNDED}>
              <AppLink href={AUTH} className={styles.link}>
                {t('login')}
              </AppLink>
            </Button>
          </Box>
        </Box>
      </Box>
    </header>
  );
};
