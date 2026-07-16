import type { ButtonPresets } from '../model/button.types';

import {
  BUTTON_MIN_WIDTH,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from './button.constants';

const { SUBMIT, BUTTON } = BUTTON_TYPES;
const { SM, LG, CONTENT } = BUTTON_MIN_WIDTH;
const { ROUNDED, CIRCLE } = BUTTON_SHAPES;
const { SMALL, MEDIUM, LARGE, COMPACT } = BUTTON_SIZES;
const { DEFAULT, OUTLINE, TRANSPARENT } = BUTTON_VARIANTS;

export const BUTTON_PRESETS: ButtonPresets = {
  AUTH_LOGIN: {
    variant: DEFAULT,
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

  ADD: {
    type: BUTTON,
    shape: ROUNDED,
    variant: DEFAULT,
    size: MEDIUM,
    minWidth: LG,
  },

  HEADER_LOGIN: {
    fullWidth: true,
    type: BUTTON,
    minWidth: SM,
    shape: ROUNDED,
    size: MEDIUM,
    variant: DEFAULT,
  },

  SUBMIT: {
    type: SUBMIT,
    minWidth: LG,
    shape: ROUNDED,
    size: MEDIUM,
    variant: DEFAULT,
  },

  EDIT: {
    fullWidth: true,
    type: BUTTON,
    size: SMALL,
    minWidth: CONTENT,
    shape: ROUNDED,
    variant: DEFAULT,
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
    variant: DEFAULT,
  },

  EMPTY_PROJECTS: {
    type: BUTTON,
    variant: DEFAULT,
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
  },

  MODAL_DEFAULT: {
    type: BUTTON,
    variant: DEFAULT,
    size: LARGE,
    shape: ROUNDED,
  },

  MODAL_CLOSE: {
    type: BUTTON,
    variant: TRANSPARENT,
  },
} as const;

export type ButtonPresetKey = keyof typeof BUTTON_PRESETS;
