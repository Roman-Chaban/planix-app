export enum ModalId {
  LOGOUT = 'logout',
  VERIFY_EMAIL = 'verifyEmail',
  DELETE_MODAL = 'deleteProject',
}

export type ModalState = {
  activeModal: ModalId | null;
};
