import { forwardRef, useId } from 'react';

import { useTranslation } from 'react-i18next';

import { buildClassName } from '@/shared/lib';
import { Box } from '@/shared/ui';
import type { TextareaProps } from '@/shared/ui/textarea';

import styles from './Textarea.module.scss';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, textareaClassName, labelClassName, placeholder, ...props }, ref) => {
    const { t } = useTranslation();
    const generatedId = useId();
    const textareaId = id || generatedId;

    return (
      <Box className={styles.wrapper}>
        {label && (
          <label htmlFor={textareaId} className={labelClassName}>
            {t(label)}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          placeholder={placeholder ? t(placeholder) : undefined}
          className={buildClassName(styles.textarea, textareaClassName)}
          {...props}
        />
      </Box>
    );
  },
);

Textarea.displayName = 'Textarea';
