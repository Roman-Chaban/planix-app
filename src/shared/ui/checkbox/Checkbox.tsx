import type { FC } from "react";

import { classNames } from "@/shared/lib/class-names";
import { CheckmarkIcon } from "@/shared/ui/icons/Icons";
import { Typography } from "@/shared/ui/typography/Typography";
import { INPUT_TYPES } from "@shared/constants/constants";

import styles from "./checkbox.module.scss";
import { CheckboxProps } from "./model/checkbox.types";

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled,
  id,
}) => {
  return (
    <label
      htmlFor={id}
      className={classNames(styles.wrapper, disabled && styles.disabled)}
    >
      <input
        id={id}
        type={INPUT_TYPES.CHECKBOX}
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />

      <Typography as="span" className={styles.box}>
        <CheckmarkIcon
          className={classNames(styles.checkIcon, checked && styles.visible)}
        />
      </Typography>

      {label && (
        <Typography as="span" className={styles.label}>
          {label}
        </Typography>
      )}
    </label>
  );
};
