import {
  BUTTON_MAX_WIDTH,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from './constants';

const { SUBMIT, BUTTON } = BUTTON_TYPES;
const { LG, XS } = BUTTON_MAX_WIDTH;
const { ROUNDED } = BUTTON_SHAPES;
const { SMALL, MEDIUM } = BUTTON_SIZES;
const { DEFAULT, OUTLINE } = BUTTON_VARIANTS;

export const BUTTON_PRESETS = {
  SUBMIT: {
    fullWidth: true,
    type: SUBMIT,
    maxWidth: LG,
    shape: ROUNDED,
    size: MEDIUM,
    variant: DEFAULT,
  },
  EDIT: {
    fullWidth: true,
    type: BUTTON,
    size: SMALL,
    maxWidth: XS,
    shape: ROUNDED,
    variant: DEFAULT,
  },
  CANCEL_PLAN: {
    fullWidth: true,
    type: BUTTON,
    maxWidth: LG,
    shape: ROUNDED,
    size: MEDIUM,
    variant: OUTLINE,
  },
  UPDATE_PLAN: {
    fullWidth: true,
    type: BUTTON,
    maxWidth: LG,
    shape: ROUNDED,
    size: MEDIUM,
    variant: DEFAULT,
  },
} as const;

export type ButtonPresetKey = keyof typeof BUTTON_PRESETS;
