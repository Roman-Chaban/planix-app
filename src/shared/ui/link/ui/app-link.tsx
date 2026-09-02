'use client';

import type { AppLinkProps } from '../model/types';

import Link from 'next/link';

import { useParams } from 'next/navigation';

import { DEFAULT_LOCALE } from '@/shared/i18n/locales/locales';
import { buildHref, buildClassName } from '@/shared/lib';

import { LINK_TARGETS } from '../model/constants';

import styles from './app-link.module.scss';

export const AppLink = ({
  children,
  href,
  isUnderline = false,
  external = false,
  className,
  ...appLinkProps
}: AppLinkProps) => {
  const params = useParams();
  const locale = (params?.locale as string) || DEFAULT_LOCALE;
  const localizedHref = buildHref(href, locale);

  const linkClasses = buildClassName(styles.link, isUnderline && styles.underline, className);

  if (external) {
    return (
      <a
        href={localizedHref}
        className={linkClasses}
        target={LINK_TARGETS.BLANK}
        rel="noopener noreferrer"
        {...appLinkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={localizedHref} className={linkClasses}>
      {children}
    </Link>
  );
};
