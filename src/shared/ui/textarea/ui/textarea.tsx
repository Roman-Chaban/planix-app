'use client';

import type { TextareaProps } from '../model/types';

import { forwardRef, useId } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';

import { FormLabel, FormError } from '../../form';

import { TEXTAREA_VARIANTS } from '../model/constants';

import styles from './textarea.module.scss';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      id,
      textareaClassName,
      labelClassName,
      placeholder,
      error,
      variant = TEXTAREA_VARIANTS.DEFAULT,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;

    const classNames = buildClassName(styles.textarea, textareaClassName, styles[variant]);

    return (
      <Box className={styles.wrapper}>
        <FormLabel htmlFor={textareaId} className={buildClassName(labelClassName)}>
          {label}
        </FormLabel>

        <textarea
          ref={ref}
          id={textareaId}
          placeholder={placeholder}
          className={classNames}
          {...props}
        />

        <FormError error={error ?? ''} />
      </Box>
    );
  },
);

Textarea.displayName = 'Textarea';
