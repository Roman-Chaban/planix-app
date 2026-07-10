export enum ModalId {
  LOGOUT = 'logout',
}

export type ModalState = {
  activeModal: ModalId | null;
};
