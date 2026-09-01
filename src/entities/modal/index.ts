export { modalSlice, modalReducer, closeModal, openModal, toggleModal } from './model/slice';

export { ModalId, type ModalState } from './model/types';

export { usePersistModal } from './model/use-persist-modal';

export { selectIsModalOpen, selectActiveModal } from './model/selectors';
