'use client';

import { forwardRef, useId } from 'react';

import { buildClassName } from '@/shared/lib';
import { Box, FormError, FormLabel } from '@/shared/ui';
import type { TextareaProps } from '@/shared/ui/textarea';

import styles from './Textarea.module.scss';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, textareaClassName, labelClassName, placeholder, error, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;

    return (
      <Box className={styles.wrapper}>
        <FormLabel htmlFor={textareaId} className={buildClassName(labelClassName)}>
          {label}
        </FormLabel>

        <textarea
          ref={ref}
          id={textareaId}
          placeholder={placeholder}
          className={buildClassName(styles.textarea, textareaClassName)}
          {...props}
        />

        <FormError error={error ?? ''} />
      </Box>
    );
  },
);

Textarea.displayName = 'Textarea';
