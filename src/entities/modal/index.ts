export { modalSlice, modalReducer, closeModal, openModal, toggleModal } from './model/modal.slice';

export { ModalId, type ModalState } from './model/modal.types';

export { usePersistModal } from './model/usePersistModal';

export { selectIsModalOpen, selectActiveModal } from './model/modal.selectorts';
