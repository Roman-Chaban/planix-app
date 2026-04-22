export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
} as const;

export const LINK_TARGETS = {
  BLANK: "_blank",
  SELF: "_self",
  PARENT: "_parent",
  TOP: "_top",
  FRAMENAME: "framename",
} as const;

export const INPUT_TYPES = {
  TEXT: "text",
  CHECKBOX: "checkbox",
  TEL: "tel",
  EMAIL: "email",
  PASSWORD: "password",
  SEARCH: "search",
} as const;

export const BUTTON_TYPES = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
} as const;
