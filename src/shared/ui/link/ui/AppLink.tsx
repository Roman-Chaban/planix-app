'use client';

import type { FC } from 'react';

import Link from 'next/link';

import { useParams } from 'next/navigation';

import { LINK_TARGETS } from '@/shared/constants';
import { buildHref, buildClassName } from '@/shared/lib';
import { DEFAULT_LOCALE } from '@/shared/lib/i18n/locales';
import type { AppLinkProps } from '@/shared/ui/link';

import styles from './AppLink.module.scss';

export const AppLink: FC<AppLinkProps> = ({
  children,
  href,
  isUnderline = false,
  external = false,
  className,
  ...appLinkProps
}) => {
  const params = useParams();
  const locale = (params?.locale as string) || DEFAULT_LOCALE;
  const localizedHref = buildHref(href, locale);

  const linkClasses = buildClassName(
    styles.link,
    isUnderline && styles.underline,
    className,
  );

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
