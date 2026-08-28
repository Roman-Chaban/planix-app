'use client';

import type { TextareaProps } from '../model/types';

import { forwardRef, useId } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';

import { FormLabel, FormError } from '../../form';

import { TEXTAREA_VARIANTS } from '../model/constants';

import styles from './textarea.module.scss';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, placeholder, error, variant = TEXTAREA_VARIANTS.DEFAULT, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const hasError = !!error;

    const textareaClassNames = buildClassName(styles.textarea, styles[variant], {
      [styles.error]: hasError,
    });

    const labelClassNames = buildClassName(styles.label, { [styles.errorLabel]: hasError });

    return (
      <Box className={styles.wrapper}>
        <FormLabel htmlFor={textareaId} className={labelClassNames}>
          {label}
        </FormLabel>

        <textarea
          ref={ref}
          id={textareaId}
          placeholder={placeholder}
          className={textareaClassNames}
          {...props}
        />

        <FormError error={error ?? ''} />
      </Box>
    );
  },
);

Textarea.displayName = 'Textarea';
