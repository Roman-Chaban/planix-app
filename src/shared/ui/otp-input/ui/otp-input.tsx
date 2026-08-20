'use client';

import type { OtpInputProps } from '../model/types';

import { useRef, useState, type ChangeEvent } from 'react';
import { useController, type FieldValues } from 'react-hook-form';

import { Box } from '../../box';
import { Input, INPUT_TYPES } from '../../input';

import { OtpCell } from './otp-cell';
import styles from './otp-input.module.scss';

const { TEXT } = INPUT_TYPES;

export const OtpInput = <T extends FieldValues>({
  control,
  name,
  length = 6,
  disabled,
}: OtpInputProps<T>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { field } = useController({
    control,
    name,
  });

  const value = field.value ?? '';
  const isCompleted = value.length === length;
  const activeIndex = isCompleted ? null : value.length;

  const handleWrapperClick = () => {
    if (disabled) return;

    const input = inputRef.current;

    if (!input) return;

    input.focus();

    const length = input.value.length;

    input.setSelectionRange(length, length);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    field.onBlur();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const nextValue = event.target.value.replace(/\D/g, '').slice(0, length);

    if (nextValue === value) return;

    field.onChange(nextValue);
  };

  const cells = Array.from({ length }, (_, index) => ({
    character: value[index],
    isActive: !disabled && isFocused && index === activeIndex,
    isFilled: Boolean(value[index]),
    disabled,
  }));

  return (
    <Box className={styles.wrapper} onClick={handleWrapperClick}>
      <Input
        type={TEXT}
        autoComplete="one-time-code"
        inputMode="numeric"
        pattern="\d*"
        maxLength={length}
        disabled={disabled}
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={styles.hidden}
      />

      <Box className={styles.cellContainer}>
        {cells.map((cell, index) => (
          <OtpCell key={index} {...cell} />
        ))}
      </Box>
    </Box>
  );
};
