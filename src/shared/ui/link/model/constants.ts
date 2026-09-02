export const LINK_TARGETS = {
  BLANK: '_blank',
  SELF: '_self',
  PARENT: '_parent',
  TOP: '_top',
  FRAMENAME: 'framename',
} as const;

export type LinkTargets = (typeof LINK_TARGETS)[keyof typeof LINK_TARGETS];
