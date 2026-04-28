import type { LinkProps } from './model/types';

import type { FC } from 'react';

import Link from 'next/link';

import { LINK_TARGETS } from '@/shared/constants/constants';
import { classNames } from '@/shared/lib/helpers/class-names';

import styles from './styles.module.scss';

export const AppLink: FC<LinkProps> = ({
  children,
  href,
  isUnderline = false,
  external = false,
  className,
  ...props
}) => {
  const linkClasses = classNames(styles.link, isUnderline && styles.underline, className);

  if (external) {
    return (
      <a
        href={href}
        className={linkClasses}
        target={LINK_TARGETS.BLANK}
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
};
