'use client';

import type { LinkProps } from './app-link.types';

import type { FC } from 'react';

import Link from 'next/link';

import { useParams } from 'next/navigation';

import { LINK_TARGETS } from '@/shared/config/common/common';
import { DEFAULT_LOCALE } from '@/shared/config/locales/locales';
import { buildClassName } from '@/shared/lib/classnames/buildClassName';

import { buildHref } from '@/shared/lib/routing/build-href';

import styles from '@/shared/ui/link/AppLink.module.scss';

export const AppLink: FC<LinkProps> = ({
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
