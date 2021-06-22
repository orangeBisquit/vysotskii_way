import { toggleClass } from './util.min.js';
import { createSubmitHandler } from './success-message.js';

const MODAL_OPEN_TRIGGERS = document.querySelectorAll('.js-modal-buy');
const MODAL = document.querySelector('.modal-buy__overlay');
const BUTTON_CLOSE = document.querySelector('.modal-buy__button-close');

// ---------------------------------------------------------
const toggleModal = () => {
  toggleClass(MODAL, "modal-buy__overlay--open");
}

// ---------------------------------------------------------
const modalOpenHandler = (evt) => {
  evt.preventDefault();
  toggleModal();
  createSubmitHandler();

  MODAL_OPEN_TRIGGERS.forEach(() => {
    removeEventListener('click', modalOpenHandler)
  })
};

const openModal = () => {
  MODAL_OPEN_TRIGGERS.forEach((element) => {
    element.addEventListener('click', modalOpenHandler)
  });

  document.addEventListener('click', onOverlayClickHandler);
  document.addEventListener('keydown', onEscPressHandler);
  BUTTON_CLOSE.addEventListener("click", onButtonCloseHandler)
}
// --------------------------------------------------------

const modalCloseHandler = (evt) => {
  BUTTON_CLOSE.removeEventListener('click', modalCloseHandler);

  evt.preventDefault();
  toggleModal()

  MODAL_OPEN_TRIGGERS.forEach((element) => {
    element.addEventListener('click', modalOpenHandler)
  })
}
// ---------------------------------------------------

const onButtonCloseHandler = () => {
  BUTTON_CLOSE.removeEventListener("click", onButtonCloseHandler)
  toggleModal();
}

const onEscPressHandler = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Escape') {
    toggleModal()
    document.removeEventListener("keydown", onEscPressHandler);
  }
}

const onOverlayClickHandler = (evt) => {
  if (evt.target === MODAL) {
    toggleModal()
    document.removeEventListener("click", onOverlayClickHandler);
  }
}
// ----------------------------------------------------------------
export { openModal, toggleModal }
