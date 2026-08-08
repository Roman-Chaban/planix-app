export enum ModalId {
  LOGOUT = 'logout',
  VERIFY_EMAIL = 'verifyEmail',
}

export type ModalState = {
  activeModal: ModalId | null;
};
