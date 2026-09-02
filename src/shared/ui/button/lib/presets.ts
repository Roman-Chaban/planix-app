import type { ButtonPreset } from '../model/types';

import {
  BUTTON_MIN_WIDTHS,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '../model/constants';

const { BUTTON, SUBMIT } = BUTTON_TYPES;
const { CONTENT, SM, MD, LG } = BUTTON_MIN_WIDTHS;
const { ROUNDED, CIRCLE } = BUTTON_SHAPES;
const { COMPACT, SMALL, MEDIUM, LARGE } = BUTTON_SIZES;
const { DEFAULT: DEFAULT_VARIANT, OUTLINE, TRANSPARENT } = BUTTON_VARIANTS;

export const BUTTON_PRESETS = {
  AUTH_LOGIN: {
    variant: DEFAULT_VARIANT,
    minWidth: SM,
    shape: ROUNDED,
    type: SUBMIT,
  },

  AUTH_REGISTER: {
    minWidth: LG,
    shape: ROUNDED,
  },

  AUTH_FORGOT: {
    variant: TRANSPARENT,
    minWidth: LG,
    type: BUTTON,
  },

  AUTH_FORGOT_SEND: {
    minWidth: SM,
    shape: ROUNDED,
  },

  NOTIFICATION: {
    type: BUTTON,
    size: SMALL,
    shape: CIRCLE,
  },

  CREATE_PROJECT: {
    type: SUBMIT,
    shape: ROUNDED,
    variant: DEFAULT_VARIANT,
    size: MEDIUM,
    minWidth: LG,
  },

  HEADER_LOGIN: {
    fullWidth: true,
    type: BUTTON,
    minWidth: SM,
    shape: ROUNDED,
    size: MEDIUM,
    variant: DEFAULT_VARIANT,
  },

  SUBMIT: {
    type: SUBMIT,
    minWidth: LG,
    shape: ROUNDED,
    size: MEDIUM,
    variant: DEFAULT_VARIANT,
  },

  EDIT: {
    fullWidth: true,
    type: BUTTON,
    size: SMALL,
    minWidth: CONTENT,
    shape: ROUNDED,
    variant: DEFAULT_VARIANT,
  },

  CANCEL_PLAN: {
    type: BUTTON,
    minWidth: LG,
    shape: ROUNDED,
    size: MEDIUM,
    variant: OUTLINE,
  },

  UPDATE_PLAN: {
    type: BUTTON,
    minWidth: LG,
    shape: ROUNDED,
    size: MEDIUM,
    variant: DEFAULT_VARIANT,
  },

  EMPTY_PROJECTS: {
    type: BUTTON,
    variant: DEFAULT_VARIANT,
    shape: ROUNDED,
    minWidth: LG,
    size: LARGE,
  },

  UPLOAD_AVATAR: {
    type: BUTTON,
    variant: TRANSPARENT,
    size: COMPACT,
    shape: CIRCLE,
  },

  MODAL_OUTLINE: {
    type: BUTTON,
    variant: OUTLINE,
    size: LARGE,
    shape: ROUNDED,
    minWidth: MD,
  },

  MODAL_DEFAULT: {
    type: BUTTON,
    variant: DEFAULT_VARIANT,
    size: LARGE,
    shape: ROUNDED,
    minWidth: MD,
  },

  MODAL_CLOSE: {
    type: BUTTON,
    variant: TRANSPARENT,
  },

  SELECT_PLAN: {
    type: BUTTON,
    variant: DEFAULT_VARIANT,
    size: LARGE,
    shape: ROUNDED,
    minWidth: LG,
  },
} satisfies Record<string, ButtonPreset>;

export type ButtonPresetKey = keyof typeof BUTTON_PRESETS;
